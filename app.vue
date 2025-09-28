<template>
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PM785BGV" height="0" width="0" style="display: none; visibility: hidden"></iframe></noscript>
    <NuxtLayout> <NuxtPage /> </NuxtLayout>
</template>

<script setup>
useHead({
    title: "Daniel Ladeira / Backend/DevOps Developer",
    titleTemplate: "%s",
    meta: [{ name: "description", content: "Backend/DevOps developer based in Europe. Specialized in React/NEXT, Vue/NUXT, MongoDB, and NodeJS." }],
    htmlAttrs: {
        lang: "en",
    },
    script: [{ src: "https://www.googletagmanager.com/gtag/js?id=G-DGXWE1276G" }],
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

    window.dataLayer = window.dataLayer || []
    function gtag() {
        dataLayer.push(arguments)
    }
    gtag("js", new Date())

    gtag("config", "G-DGXWE1276G")
})
</script>
