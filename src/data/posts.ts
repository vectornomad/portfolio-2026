export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  body: string;
};

// Add a post by copying the example below into this array and replacing its text.
// Separate paragraphs with a blank line. Start a line with ## for a subheading.
// The newest date appears first on the blog page.
export const posts: Post[] = [
  // {
  //   slug: "my-first-post",
  //   title: "My first post",
  //   date: "2026-09-25",
  //   excerpt: "One sentence about what readers will learn.",
  //   body: `Your opening paragraph goes here.
  //
  // ## A subheading
  //
  // Your next paragraph goes here.`,
  // },
];
