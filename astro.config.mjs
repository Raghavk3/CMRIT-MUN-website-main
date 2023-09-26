import image from "@astrojs/image";
import IMG from "~/assets/hero.jpg"
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://amazing-fenglisu-7f5265.netlify.app/",
  integrations: [
    tailwind(),
    image({
      serviceEntryPoint: {IMG},
    }),
  ],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
