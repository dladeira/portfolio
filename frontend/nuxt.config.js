import en from './locales/en.json'
import pl from './locales/pl.json'
import pt from './locales/pt.json'

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
    nitro: {
        compressPublicAssets: true
    },
    modules: [
        'nuxt-proxy',
        '@nuxt/image-edge', 
        '@nuxtjs/i18n',
        '@funken-studio/sitemap-nuxt-3',
        '@nuxtjs/robots'
    ],
    i18n: {
        locales: ['en', 'pl', 'pt'],
        defaultLocale: 'en',
        vueI18n: {
            legacy: false,
            locale: 'en',
            messages: {
                en,
                pl,
                pt
            }
        }
    },
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
    }
})
