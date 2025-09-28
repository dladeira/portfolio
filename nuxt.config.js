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
    modules: ["@nuxt/image", "@nuxtjs/seo", "nuxt-nodemailer"],
    site: {
        url: process.env.NUXT_ORIGIN,
    },
    mongoose: {
        uri: process.env.NUXT_MONGODB_URI,
    },
    nodemailer: {
        from: process.env.NUXT_SMTP_FROM_HEADER,
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
        SMTP_TO: process.env.NUXT_SMTP_TO,
    },
})
