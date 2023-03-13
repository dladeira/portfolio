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
        }
    })
}

useHead({
    title: `Daniel Ladeira / ${t('meta.title')}`,
    meta: [
        { name: 'description', content: t('meta.description') }
    ],
    htmlAttrs: {
        lang: useI18n().locale.value
    }
})
</script>