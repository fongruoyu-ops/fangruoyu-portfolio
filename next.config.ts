import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  ...(process.env.CLOUDBASE_STATIC_EXPORT === "1"
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
