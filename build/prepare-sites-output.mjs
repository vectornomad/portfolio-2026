import { copyFile, mkdir } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const workerSource = new URL("dist/portfolio_2026/index.js", root);
const serverDirectory = new URL("dist/server/", root);

await mkdir(serverDirectory, { recursive: true });
await copyFile(workerSource, new URL("index.js", serverDirectory));
