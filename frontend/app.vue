<template>
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PM785BGV" height="0" width="0" style="display: none; visibility: hidden"></iframe></noscript>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup>
const { t } = useI18n()

useI18n().onLanguageSwitched = (oldLocale, newLocale) => {
    useHead({
        title: `Daniel Ladeira / ${t("meta.title")}`,
        meta: [{ name: "description", content: t("meta.description") }],
        htmlAttrs: {
            lang: newLocale,
        },
    })
}

useHead({
    title: `Daniel Ladeira / ${t("meta.title")}`,
    meta: [{ name: "description", content: t("meta.description") }],
    htmlAttrs: {
        lang: useI18n().locale.value,
    },
})

onBeforeMount(() => {
    ;(function (w, d, s, l, i) {
        w[l] = w[l] || []
        w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" })
        var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s),
            dl = l != "dataLayer" ? "&l=" + l : ""
        j.async = true
        j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl
        f.parentNode.insertBefore(j, f)
    })(window, document, "script", "dataLayer", "GTM-PM785BGV")
})
</script>
