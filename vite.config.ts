import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { sites } from "./build/sites-vite-plugin.js";
import { markdownPosts } from "./build/markdown-posts-plugin.js";

export default defineConfig(async () => {
  const { cloudflare } = await import("@cloudflare/vite-plugin");

  return {
    plugins: [
      react(),
      tailwindcss(),
      markdownPosts(),
      sites(),
      cloudflare({
        config: {
          main: "./worker/index.ts",
          compatibility_flags: ["nodejs_compat"],
          assets: {
            binding: "ASSETS",
            not_found_handling: "single-page-application",
          },
        },
      }),
    ],
  };
});
