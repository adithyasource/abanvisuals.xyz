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
          boxShadow: {
            "3xl": "10px 9px 400px 200px rgba(0,0,0,0.83)",
          },
        },
      },
    },
  },
  app: { pageTransition: { name: "page", mode: "out-in" } },
};
