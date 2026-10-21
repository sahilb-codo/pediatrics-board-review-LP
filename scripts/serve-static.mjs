/**
 * Dependency-free static server for previewing the exported site in `out/`.
 * Usage: npm run preview            (http://localhost:4173)
 *        node scripts/serve-static.mjs [dir] [port]
 *
 * Mirrors typical static hosting: directory requests serve `index.html`, `/path` redirects
 * to `/path/` when a directory index exists, and unknown paths return `404.html`.
 */
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, resolve, sep } from "node:path";

const root = resolve(process.argv[2] ?? "out");
const port = Number(process.argv[3] ?? process.env.PORT ?? 4173);

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json",
  ".txt": "text/plain; charset=utf-8",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".png": "image/png",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
};

async function isFile(path) {
  try {
    return (await stat(path)).isFile();
  } catch {
    return false;
  }
}

createServer(async (request, response) => {
  const pathname = decodeURIComponent(new URL(request.url ?? "/", "http://localhost").pathname);
  const target = resolve(join(root, pathname));
  if (target !== root && !target.startsWith(root + sep)) {
    response.writeHead(403).end();
    return;
  }

  const candidate = pathname.endsWith("/") ? join(target, "index.html") : target;
  if (await isFile(candidate)) {
    response.writeHead(200, { "Content-Type": contentTypes[extname(candidate)] ?? "application/octet-stream" });
    response.end(await readFile(candidate));
    return;
  }

  if (!pathname.endsWith("/") && (await isFile(join(target, "index.html")))) {
    response.writeHead(308, { Location: `${pathname}/` }).end();
    return;
  }

  const notFoundPage = join(root, "404.html");
  response.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
  response.end((await isFile(notFoundPage)) ? await readFile(notFoundPage) : "Not found");
}).listen(port, () => {
  console.log(`Serving ${root} at http://localhost:${port}`);
});
