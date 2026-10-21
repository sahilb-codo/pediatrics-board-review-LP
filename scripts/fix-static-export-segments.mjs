/**
 * Post-export fix for segment prefetch files on Windows.
 *
 * `next build` with `output: "export"` writes each route's prefetch segments as
 * `__next.<segment path with "/" replaced by ".">.txt` (for example
 * `coming-soon/__next.coming-soon.__PAGE__.txt`), which is the URL the client requests.
 * On Windows, Next.js 16.4 builds the segment path with `path.relative()`, so it contains
 * backslashes that are not replaced and the file is written to a nested directory
 * (`coming-soon/__next.coming-soon/__PAGE__.txt`) instead, causing 404s on prefetch.
 *
 * This script flattens any such nested `__next.*` directories back into the expected
 * dot-separated filenames. On other platforms there is nothing to flatten and it is a no-op.
 */
import { readdir, rename, rm } from "node:fs/promises";
import { join, relative, sep } from "node:path";

const outDir = join(process.cwd(), "out");

async function listFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map((entry) => {
      const fullPath = join(directory, entry.name);
      return entry.isDirectory() ? listFiles(fullPath) : [fullPath];
    }),
  );
  return nested.flat();
}

async function fixDirectory(directory) {
  let fixed = 0;
  const entries = await readdir(directory, { withFileTypes: true });
  for (const entry of entries) {
    if (!entry.isDirectory() || entry.name === "_next") continue;
    const fullPath = join(directory, entry.name);

    if (entry.name.startsWith("__next.")) {
      for (const file of await listFiles(fullPath)) {
        const flatName = relative(directory, file).split(sep).join(".");
        await rename(file, join(directory, flatName));
        fixed += 1;
      }
      await rm(fullPath, { recursive: true });
    } else {
      fixed += await fixDirectory(fullPath);
    }
  }
  return fixed;
}

try {
  const fixed = await fixDirectory(outDir);
  if (fixed > 0) console.log(`fix-static-export-segments: flattened ${fixed} segment file(s) in out/`);
} catch (error) {
  if (error.code === "ENOENT") process.exit(0); // No export output (e.g. output mode changed).
  throw error;
}
