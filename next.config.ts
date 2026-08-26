import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  // Wajib untuk Docker: menghasilkan .next/standalone yang sudah berisi
  // node_modules seperlunya, jadi image tidak perlu install dependency lagi.
  output: "standalone",
  experimental: {
    optimizePackageImports: [
      "@mantine/core",
      "@mantine/hooks",
      // "@mantine/form",
      // "@mantine/notifications",
      // "@mantine/nprogress",
      // "@mantine/carousel",
    ],
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
