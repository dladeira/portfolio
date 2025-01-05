<template>
    <div>
        <h1 class="page-title">{{ $t("works.header") }}</h1>
        <section class="works">
            <Work v-for="work of works" :id="work.id" :website="work.website" :tags="work.tags" :type="work.type" :client="work.client" :review="work.review" :backgroundGradient="work.backgroundGradient" :stats="work.stats" />
        </section>
    </div>
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
const { t } = useI18n()

const works = [
    {
        id: "gamey",
        imageHeight: 53,
        website: "https://gamey.ai",
        tags: ["Nuxt", "MongoDB", "Figma", "ElevenLabs", "AssemblyAI", "FFMPEG"],
        type: "client",
        stats: [
            {
                title: "+$2,000",
                subtitle: t("works.terms.monthly_revenue"),
            },
            {
                title: ">80",
                subtitle: t("works.terms.registered_users"),
            },
        ],
        client: {
            name: "Magic",
            tag: `310K ${t("hero.subscribers")}`,
            external: "https://www.youtube.com/channel/UC0KMDDerdrOGTaqk3m-kWGw",
            icon: "/people/magic.png",
        },
        review: {
            icon: "/people/magic.png",
            name: "Blake",
            tag: "Candia Studios",
            text: t("works.reviews.blake"),
        },
        backgroundGradient: ["#1A1126", "#0E051B"],
    },
    {
        id: "hoplite",
        imageHeight: 88,
        website: "https://hoplite.gg",
        tags: ["Next.js", "Tebex", "Strapi"],
        type: "client",
        stats: [
            {
                title: "+$10,000",
                subtitle: t("works.terms.monthly_revenue"),
            },
            {
                title: ">45,000",
                subtitle: t("works.terms.monthly_visits"),
            },
            {
                title: ">15,000",
                subtitle: t("works.terms.monthly_organic_searches"),
            },
        ],
        client: {
            name: "SpeedSilver",
            tag: `3.5M ${t("hero.subscribers")}`,
            external: "https://www.youtube.com/@SpeedSilver",
            icon: "/people/speedsilver.png",
        },
        review: {
            icon: "/people/marbar.png",
            name: "Marbar",
            tag: `${t("works.terms.operations")} @ HopliteNetwork`,
            text: t("works.reviews.marbar"),
        },
        backgroundGradient: ["#272124", "#503D2F"],
    },
    {
        id: "infracharm",
        imageHeight: 33,
        website: "https://infracharm.com",
        tags: ["Nuxt", "Figma"],
        type: "client",
        stats: [
            {
                title: "+100",
                subtitle: t("works.terms.acquired_clients"),
            },
        ],
        client: {
            name: "InfraCharm",
            icon: "/people/infracharm.png",
        },
        review: {
            icon: "/people/infracharm.png",
            name: "Jared",
            tag: `${t("works.terms.owner")} @ Infracharm`,
            text: t("works.reviews.jared"),
        },
        backgroundGradient: ["#934A97", "#730F23"],
    },
    {
        id: "polanner",
        imageHeight: 48,
        website: "https://polanner.com",
        tags: ["Nuxt", "Figma", "MongoDB", "Electron", "ChatGPT"],
        type: "startup",
        backgroundGradient: ["#00B2FF", "#006B99"],
    },
]
</script>
