import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import astroI18next from "astro-i18next";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), astroI18next()],
  image: {
    domains: ["cloudinary.com"],
    remotePatterns: [{ protocol: "https" }],
  },
});
