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
    modules: ["@nuxt/image"],
})
