<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup>
const { t } = useI18n()

useI18n().onLanguageSwitched = (oldLocale, newLocale) => {
    useHead({
        title: `Daniel Ladeira / ${t('hero.subtitle1')} ${t('hero.subtitle2')}`,
        meta: [
            { name: 'description', content: 'Trilingual freelance web developer based in Warsaw, Poland. Specializes in React/NEXT, Vue/NUXT, MongoDB, and NodeJS.' }
        ],
        htmlAttrs: {
            lang: newLocale
        }
    })
}

useHead({
    title: `Daniel Ladeira / ${t('hero.subtitle1')} ${t('hero.subtitle2')}`,
    meta: [
        { name: 'description', content: 'Trilingual freelance web developer based in Warsaw, Poland. Specializes in React/NEXT, Vue/NUXT, MongoDB, and NodeJS.' }
    ],
    htmlAttrs: {
        lang: useI18n().locale.value
    }
})
</script>