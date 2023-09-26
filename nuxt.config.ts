// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  devtools: { enabled: false },
  ssr: false,
  css: ["@/assets/css/main.css"],
  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {
    config: {
      theme: {
        extend: {
          fontFamily: {
            spaceMono: "Space Mono",
            monument: "Monument",
          },
        },
      },
    },
  },
  app: { pageTransition: { name: "page", mode: "out-in" } },
};
