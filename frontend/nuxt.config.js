export default defineNuxtConfig({
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

    // modules: ["nuxt-proxy", "@nuxtjs/i18n", "@funken-studio/sitemap-nuxt-3", "@nuxtjs/robots", "@nuxt/image"],
    modules: ["nuxt-proxy", "@nuxtjs/i18n", "@nuxt/image"],

    i18n: {
        locales: ["en", "pl", "pt"],
        defaultLocale: "en",
        vueI18n: "./i18n.config.js",
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

    compatibilityDate: "2024-12-12",
})
