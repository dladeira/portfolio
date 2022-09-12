import en from './locales/en.json'
import pl from './locales/pl.json'
import pt from './locales/pt.json'

export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'portfolio',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                rel: "preconnect",
                href: "https://fonts.googleapis.com"
            },
            {
                rel: "preconnect",
                href: "https://fonts.gstatic.com",
                crossOrigin: true
            },
            {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css2?family=Public+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap"
            }
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
        '@nuxt/image',
        '@nuxtjs/i18n'
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

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
    ],

    image: {

    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
    }
}