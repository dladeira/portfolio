// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        '@/assets/styles/global.scss'
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/assets/styles/variables.scss";'
                }
            }
        }
    },
    modules: [
        'nuxt-proxy',
        '@nuxt/image-edge', 
    ],
    runtimeConfig: {
        proxy: {
            options: [{
                target: process.env.API_SERVER,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/'
                },
                pathFilter: [
                    '/api'
                ]
            }]
        },
        public: {
            WEB_SERVER: process.env.WEB_SERVER
        }
    },
})
