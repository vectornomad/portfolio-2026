import markdownPosts from "virtual:posts";

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  published: boolean;
  body: string;
};

export const posts = markdownPosts as Post[];
