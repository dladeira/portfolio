import en from './locales/en.json'
import pl from './locales/pl.json'
import pt from './locales/pt.json'

export default {
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Daniel Ladeira - Web Developer',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'I am a low-budget web developer who speaks English, Portuguese, and Polish fluently. This is my portfolio showcasing my work and skills.' },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '@/assets/css/globals.scss'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        '@nuxtjs/style-resources',
        '@nuxtjs/i18n',
        '@nuxtjs/google-fonts'
    ],

    styleResources: {
        scss: [
            './assets/css/*.scss'
        ]
    },

    i18n: {
        locales: ['en', 'pl', 'pt'],
        defaultLocale: 'en',
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            redirectOn: 'root'
        },
        vueI18n: {
            fallbackLocale: 'en',
            messages: {
                en: en,
                pl: pl,
                pt: pt
            }
        }
    },

    googleFonts: {
        families: {
            "Public Sans": {
                wght: [100, 200, 300, 400, 500, 600, 700, 800, 900]
            },
        }
    },

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxt/image'
    ],

    image: {
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
    },

    server: {
        host: "0.0.0.0",
        port: "3006"
    }
}