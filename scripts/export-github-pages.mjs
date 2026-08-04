import { cp, readFile, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = fileURLToPath(new URL("../", import.meta.url));
const edgeOneRoot = join(projectRoot, "edgeone-dist");
const outputRoot = join(projectRoot, "github-pages-dist");
const repositoryName =
  process.env.GITHUB_REPOSITORY?.split("/").pop() ??
  "wanlianyida-bulk-ai-2026";
const basePath = `/${repositoryName}`;

await rm(outputRoot, { recursive: true, force: true });
await cp(edgeOneRoot, outputRoot, { recursive: true });

const sourceHtml = await readFile(join(outputRoot, "index.html"), "utf8");
const pagesHtml = sourceHtml
  .replaceAll("/assets/", `${basePath}/assets/`)
  .replaceAll("/og.png", `${basePath}/og.png`);

await writeFile(join(outputRoot, "index.html"), pagesHtml, "utf8");
await writeFile(join(outputRoot, ".nojekyll"), "", "utf8");

console.log(`GitHub Pages bundle created at ${outputRoot}`);
