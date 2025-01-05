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
    modules: ["@nuxtjs/i18n", "@nuxt/image", "@nuxtjs/seo", "nuxt-mongoose", "nuxt-nodemailer"],
    i18n: {
        locales: ["en", "pl", "pt", "la"],
        defaultLocale: "en",
        vueI18n: "./i18n.config.js",
        skipSettingLocaleOnNavigate: true,
    },
    site: {
        url: "https://dladeira.com",
    },
    mongoose: {
        uri: process.env.NUXT_MONGODB_URI,
    },
    nodemailer: {
        from: "Daniel Ladeira <daniel@ladeira.eu>",
        host: process.env.NUXT_SMTP_HOST,
        port: process.env.NUXT_SMTP_PORT,
        secure: true,
        auth: {
            user: process.env.NUXT_SMTP_USER,
            pass: process.env.NUXT_SMTP_PASS,
        },
    },
    runtimeConfig: {
        ORIGIN: process.env.NUXT_ORIGIN,
        MESSAGE_EMAIL: process.env.NUXT_MESSAGE_EMAIL,
    },
})
