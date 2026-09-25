import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import type { Plugin, ResolvedConfig, ViteDevServer } from "vite";
import { parse as parseYaml } from "yaml";

const virtualModuleId = "virtual:posts";
const resolvedVirtualModuleId = `\0${virtualModuleId}`;

type PostFrontmatter = {
  title?: unknown;
  date?: unknown;
  excerpt?: unknown;
  published?: unknown;
};

type MarkdownPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  published: boolean;
  body: string;
};

function requireText(value: unknown, field: string, filePath: string) {
  if (typeof value !== "string" || !value.trim()) {
    throw new Error(`${filePath}: frontmatter field "${field}" must be text.`);
  }

  return value.trim();
}

function parsePost(filePath: string, source: string): MarkdownPost {
  const match = source.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/);

  if (!match) {
    throw new Error(`${filePath}: expected YAML frontmatter between --- markers.`);
  }

  const frontmatter = parseYaml(match[1]) as PostFrontmatter;
  const slug = path.basename(filePath, ".md");

  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    throw new Error(`${filePath}: filename must use lowercase words separated by hyphens.`);
  }

  if (typeof frontmatter.published !== "boolean") {
    throw new Error(`${filePath}: frontmatter field "published" must be true or false.`);
  }

  return {
    slug,
    title: requireText(frontmatter.title, "title", filePath),
    date: requireText(frontmatter.date, "date", filePath),
    excerpt: requireText(frontmatter.excerpt, "excerpt", filePath),
    published: frontmatter.published,
    body: match[2].trim(),
  };
}

async function loadPosts(contentDirectory: string, includeDrafts: boolean) {
  const entries = await readdir(contentDirectory, { withFileTypes: true });
  const posts = await Promise.all(
    entries
      .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
      .map(async (entry) => {
        const filePath = path.join(contentDirectory, entry.name);
        return parsePost(filePath, await readFile(filePath, "utf8"));
      }),
  );

  return posts
    .filter((post) => includeDrafts || post.published)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function markdownPosts(): Plugin {
  let config: ResolvedConfig;
  let contentDirectory: string;

  const reloadVirtualModule = (server: ViteDevServer) => {
    const module = server.moduleGraph.getModuleById(resolvedVirtualModuleId);
    if (module) server.moduleGraph.invalidateModule(module);
    server.ws.send({ type: "full-reload" });
  };

  return {
    name: "vectornomad-markdown-posts",
    configResolved(resolvedConfig) {
      config = resolvedConfig;
      contentDirectory = path.resolve(config.root, "src/content/posts");
    },
    resolveId(id) {
      return id === virtualModuleId ? resolvedVirtualModuleId : undefined;
    },
    async load(id) {
      if (id !== resolvedVirtualModuleId) return undefined;

      const posts = await loadPosts(contentDirectory, config.command === "serve");
      return `export default ${JSON.stringify(posts)};`;
    },
    configureServer(server) {
      server.watcher.add(contentDirectory);
      const reloadForMarkdown = (filePath: string) => {
        if (path.dirname(filePath) === contentDirectory && filePath.endsWith(".md")) {
          reloadVirtualModule(server);
        }
      };
      server.watcher.on("add", reloadForMarkdown);
      server.watcher.on("unlink", reloadForMarkdown);
    },
    handleHotUpdate(context) {
      if (path.dirname(context.file) !== contentDirectory || !context.file.endsWith(".md")) {
        return;
      }

      reloadVirtualModule(context.server);
      return [];
    },
  };
}
