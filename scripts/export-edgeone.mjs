import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { extname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = fileURLToPath(new URL("../", import.meta.url));
const clientRoot = join(projectRoot, "dist/client");
const outputRoot = join(projectRoot, "edgeone-dist");

const contentTypes = new Map([
  [".css", "text/css; charset=utf-8"],
  [".gif", "image/gif"],
  [".html", "text/html; charset=utf-8"],
  [".ico", "image/x-icon"],
  [".jpeg", "image/jpeg"],
  [".jpg", "image/jpeg"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".png", "image/png"],
  [".svg", "image/svg+xml"],
  [".webp", "image/webp"],
  [".woff", "font/woff"],
  [".woff2", "font/woff2"],
]);

async function fetchAsset(request) {
  const url = new URL(request.url);
  const pathname = decodeURIComponent(url.pathname).replace(/^\/+/, "");
  const assetPath = resolve(clientRoot, pathname);
  const assetRelativePath = relative(clientRoot, assetPath);

  if (
    !pathname ||
    assetRelativePath.startsWith("..") ||
    assetRelativePath.includes("../")
  ) {
    return new Response("Not found", { status: 404 });
  }

  try {
    const body = await readFile(assetPath);
    const contentType =
      contentTypes.get(extname(assetPath).toLowerCase()) ??
      "application/octet-stream";
    return new Response(body, { headers: { "content-type": contentType } });
  } catch {
    return new Response("Not found", { status: 404 });
  }
}

await rm(outputRoot, { recursive: true, force: true });
await mkdir(outputRoot, { recursive: true });
await cp(clientRoot, outputRoot, { recursive: true });

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("edgeone-export", `${Date.now()}`);
const { default: worker } = await import(workerUrl.href);
const response = await worker.fetch(
  new Request("https://wanlianyida-bulk-ai.edgeone.app/", {
    headers: { accept: "text/html" },
  }),
  { ASSETS: { fetch: fetchAsset } },
  {
    passThroughOnException() {},
    waitUntil() {},
  },
);

if (!response.ok) {
  throw new Error(`Failed to render the home page: HTTP ${response.status}`);
}

const html = await response.text();
await writeFile(join(outputRoot, "index.html"), html, "utf8");

console.log(`EdgeOne bundle created at ${outputRoot}`);
