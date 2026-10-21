import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a fully static site to `out/`. The app has no route handlers, server actions,
  // cookies/headers usage or dynamic routes, so every page prerenders at build time.
  output: "export",
  // `/coming-soon` is emitted as `coming-soon/index.html`, which any static host serves.
  trailingSlash: true,
  images: {
    // The default image optimizer needs a server; static hosting serves the files as-is.
    unoptimized: true,
  },
  // cacheComponents / partialPrefetching (enabled by create-next-app) are intentionally off:
  // they rely on Partial Prerendering, which Next.js rejects in export mode, and this site
  // has no dynamic data that would benefit from them.
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
