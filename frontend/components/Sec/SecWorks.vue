<template>
    <section class="section" id="works">
        <h3 class="section-title">{{ $t("works.header") }}</h3>
        <div class="content">
            <Work v-for="work of works" :id="work.id" :type="work.type" :tags="work.tags" :website="work.website" :case="work.case" />
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
        id: "infracharm",
        type: "client",
        tags: ["Nuxt", "Figma"],
        website: "https://slot1.ladeira.eu",
    },
    {
        id: "hoplite",
        type: "client",
        tags: ["NEXT.js", "Tebex", "Strapi"],
        website: "https://hoplite.gg",
    },
    {
        id: "polanner",
        type: "startup",
        tags: ["Nuxt", "MongoDB", "Tauri"],
        website: "https://polanner.com",
        case: true,
    },
    {
        id: "mcss",
        type: "startup",
        tags: ["Nuxt", "MongoDB", "Java"],
        website: "https://mcss.ladeira.eu",
    },
]
</script>
