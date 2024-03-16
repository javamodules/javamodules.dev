import { vitePlugin as remix, cloudflareDevProxyVitePlugin as remixCloudflareDevProxy } from "@remix-run/dev";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import mdx from "@mdx-js/rollup";
import { visualizer } from "rollup-plugin-visualizer";

const isStorybook = process.argv[1]?.includes("storybook");

export default defineConfig({
  build: {
    manifest: true,
    target: "es2022",
    modulePreload: {
      polyfill: true,
    },
  },
  css: {
    modules: {
      exportGlobals: true,
    },
  },
  esbuild: {},
  ssr: {
    target: "webworker",
  },
  plugins: [
    {
      enforce: "pre",
      ...mdx(/* jsxImportSource: …, otherOptions… */),
    },
    react(),
    remixCloudflareDevProxy(),
    !isStorybook &&
      remix({
        basename: "/",
        manifest: true,
        buildDirectory: "build",
      }),
    tsconfigPaths(),
    visualizer({ emitFile: true }),
  ],
});
