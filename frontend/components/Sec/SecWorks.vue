<template>
    <section class="section" id="works">
        <h3 class="section-title">{{ $t("works.header") }}</h3>
        <div class="content">
            <Work v-for="work of works" :title="work.title" :type="work.type" :duration="work.duration" :desc="work.desc" :img="work.img" :tags="work.tags" :website="work.website" />
        </div>
    </section>
</template>

<style lang="scss" scoped>
.section {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    background-color: $background-color-1;

    padding: 6rem 0;
}

.section-title {
    margin: 0 0 4rem;

    font-size: 3rem;
}

.content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 8rem;

    margin: 0 auto;

    @include resizable-width;
}
</style>

<script setup>
const { t } = useI18n()

const works = [
    {
        title: t("works.works.1.title"),
        type: "startup",
        duration: t("works.works.1.duration"),
        desc: t("works.works.1.desc"),
        img: "polanner",
        tags: ["Nuxt", "MongoDB", "Tauri"],
        website: "https://polanner.com",
    },
    {
        title: t("works.works.2.title"),
        type: "client",
        duration: t("works.works.2.duration"),
        desc: t("works.works.2.desc"),
        img: "hoplite",
        tags: ["NEXT.js", "Tebex", "Strapi"],
        website: "https://hoplite.gg",
    },
    {
        title: t("works.works.3.title"),
        type: "startup",
        duration: t("works.works.3.duration"),
        img: "mcss",
        desc: t("works.works.3.desc"),
        tags: ["Nuxt", "MongoDB", "Java"],
        website: "https://mcss.ladeira.eu",
    },
]
</script>
