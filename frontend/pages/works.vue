<template>
    <h1 class="page-title">Works</h1>
    <section class="works">
        <Work v-for="work of works" :id="work.id" :website="work.website" :tags="work.tags" :type="work.type" :client="work.client" :review="work.review" :backgroundGradient="work.backgroundGradient" />
    </section>
</template>

<style lang="scss" scoped>
.works {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 4rem;

    opacity: 0;

    animation: $animation-duration forwards slide-from-top;
}
</style>

<script setup>
const works = [
    {
        id: "gamey",
        website: "https://gamey.ai",
        tags: ["Nuxt", "MongoDB", "Figma", "ElevenLabs", "AssemblyAI", "FFMPEG"],
        type: "client",
        client: {
            name: "Magic",
            tag: "310K subscribers",
            external: "https://www.youtube.com/channel/UC0KMDDerdrOGTaqk3m-kWGw",
            icon: "/people/magic.png",
        },
        review: {
            icon: "/people/magic.png",
            name: "Blake",
            tag: "Candia Studios",
            text: "Couldn't give a bigger vouch for Daniel - been screwed over by developers nearly every single time. Breath of fresh air to have got such an incredible and advanced SaaS tool made at such a reasonable price. He also added a few things not on the original document without penalties and was very patient throughout the process. 10/10 would and will be working with him again.",
        },
        backgroundGradient: ["#1A1126", "#0E051B"],
    },
    {
        id: "hoplite",
        website: "https://hoplite.gg",
        tags: ["Next.js", "Tebex", "Strapi"],
        type: "client",
        client: {
            name: "SpeedSilver",
            tag: "3.5M subscribers",
            external: "https://www.youtube.com/@SpeedSilver",
            icon: "/people/speedsilver.png",
        },
        review: {
            icon: "/people/marbar.png",
            name: "Marbar",
            tag: "Operations @ HopliteNetwork",
            text: "Daniel is an exceptional developer who consistently delivers high-quality work. He is reliable and completes work well before the deadline, and often on short notice as well. I highly recommend him!",
        },
        backgroundGradient: ["#272124", "#503D2F"],
    },
    {
        id: "infracharm",
        website: "https://infracharm.com",
        tags: ["Nuxt", "Figma"],
        type: "client",
        client: {
            name: "InfraCharm",
            icon: "/people/infracharm.png",
        },
        review: {
            icon: "/people/infracharm.png",
            name: "Jared",
            tag: "Owner @ Infracharm",
            text: "[Daniel] completed web development services for me. Website came out great and they were quick to make the required changes. Great!",
        },
        backgroundGradient: ["#934A97", "#730F23"],
    },
    {
        id: "polanner",
        website: "https://polanner.com",
        tags: ["Nuxt", "Figma", "MongoDB", "Electron", "ChatGPT"],
        type: "startup",
        backgroundGradient: ["#00B2FF", "#006B99"],
    },
]
</script>
