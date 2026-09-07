import type { NextConfig } from "next";

const githubPagesExport = process.env.GITHUB_PAGES === "1";
const githubPagesBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  ...(githubPagesExport
    ? {
        output: "export" as const,
        basePath: githubPagesBasePath,
        assetPrefix: githubPagesBasePath,
        trailingSlash: true,
        images: { unoptimized: true },
        typescript: {
          ignoreBuildErrors: true,
        },
      }
    : process.env.CLOUDBASE_STATIC_EXPORT === "1"
    ? {
        output: "export" as const,
        typescript: {
          // CloudBase serves a static mirror and does not bundle the
          // Cloudflare-only worker/database entry points.
          ignoreBuildErrors: true,
        },
      }
    : {}),
};

export default nextConfig;
