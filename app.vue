<template>
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PM785BGV" height="0" width="0" style="display: none; visibility: hidden"></iframe></noscript>
    <NuxtLayout>
        <NuxtPage
            :transition="{
                name: 'my',
                mode: 'in-out',
                onBeforeEnter,
            }"
        />
    </NuxtLayout>
</template>

<script setup>
const { t, finalizePendingLocaleChange } = useI18n()
const route = useRoute()
const popupSent = useState("popupSent")

onMounted(() => {
    if (route.query.confirm) {
        popupSent.value = true
    }
})

async function onBeforeEnter() {
    await finalizePendingLocaleChange()
}

useI18n().onLanguageSwitched = (oldLocale, newLocale) => {
    useHead(getHeadValue(newLocale))
}

useHead(getHeadValue(useI18n().locale.value))

function getHeadValue(locale) {
    return {
        title: `Daniel Ladeira / ${t("meta.title")}`,
        titleTemplate: "%s",
        meta: [{ name: "description", content: t("meta.description") }],
        htmlAttrs: {
            lang: locale,
        },
        script: [{ src: "https://www.googletagmanager.com/gtag/js?id=G-DGXWE1276G" }],
    }
}

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

    window.dataLayer = window.dataLayer || []
    function gtag() {
        dataLayer.push(arguments)
    }
    gtag("js", new Date())

    gtag("config", "G-DGXWE1276G")
})
</script>
