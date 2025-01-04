export default defineNuxtConfig({
    compatibilityDate: "2024-12-12",
    css: ["@/assets/styles/global.scss"],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/styles/variables.scss" as *;',
                    api: "modern-compiler",
                },
            },
        },
    },
    nitro: {
        compressPublicAssets: true,
    },
    modules: ["nuxt-proxy", "@nuxtjs/i18n", "@nuxt/image", "@nuxtjs/seo"],
    i18n: {
        locales: ["en", "pl", "pt", "la"],
        defaultLocale: "en",
        vueI18n: "./i18n.config.js",
    },
    site: {
        url: "https://dladeira.com",
    },
    runtimeConfig: {
        proxy: {
            options: [
                {
                    target: process.env.API_SERVER,
                    changeOrigin: true,
                    pathRewrite: {
                        "^/api": "/",
                    },
                    pathFilter: ["/api"],
                },
            ],
        },
        public: {
            WEB_SERVER: process.env.WEB_SERVER,
        },
    },
})
