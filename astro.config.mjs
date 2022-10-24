import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import svelte from "@astrojs/svelte";

// https://astro.build/config
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte()],
  output: "server",
  adapter: cloudflare(),
  vite: {
    define: {
      "process.env.SANITY_PROJECT_ID": JSON.stringify(
        process.env.SANITY_PROJECT_ID
      ),
      "process.env.SANITY_DATASET": JSON.stringify(process.env.SANITY_DATASET),
      "process.env.SANITY_API_VERSION": JSON.stringify(
        process.env.SANITY_API_VERSION
      ),
    },
  },
});
