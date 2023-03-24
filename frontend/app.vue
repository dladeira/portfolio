<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup>
const { t } = useI18n()

useI18n().onLanguageSwitched = (oldLocale, newLocale) => {
    useHead({
        title: `Daniel Ladeira / ${t('meta.title')}`,
        meta: [
            { name: 'description', content: t('meta.description') }
        ],
        htmlAttrs: {
            lang: newLocale
        },
        script: [
            { src: "https://www.googletagmanager.com/gtag/js?id=G-DGXWE1276G" }
        ]
    })
}

useHead({
    title: `Daniel Ladeira / ${t('meta.title')}`,
    meta: [
        { name: 'description', content: t('meta.description') }
    ],
    htmlAttrs: {
        lang: useI18n().locale.value
    },
    script: [
        { src: "https://www.googletagmanager.com/gtag/js?id=G-DGXWE1276G" }
    ]
})

onBeforeMount(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());

    gtag('config', 'G-DGXWE1276G');

})
</script>