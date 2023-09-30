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
            spaceMono: "Sora",
            monument: "Monument",
          },
          boxShadow: {
            "3xl": "10px 9px 400px 200px rgba(0,0,0,0.83)",
          },
        },
      },
    },
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: "Aban's Portfolio",
      ogTitle: "Aban's Portfolio",
      description: "Edit Portfolio + Links",
      ogDescription: "Edit Portfolio + Links",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      ogImage: "/public/share.jpg",
    },
  },
};
