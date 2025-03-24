import { defineConfig } from "astro/config";

export default defineConfig({
  markdown: {
    syntaxHighlight: false,
  },
  site: "https://www.meaningalignment.org",
  prefetch: true,
  prefetch: {
    prefetchAll: true,
  },
});
