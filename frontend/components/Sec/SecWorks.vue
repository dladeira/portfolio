<template>
    <section class="section" id="works">
        <Block blue>
            <h3 class="section-title">
                {{ $t("works.header") }} <span class="section-title-shadow">{{ $t("works.header") }}</span>
            </h3>
        </Block>
        <div class="form-block">
            <Work v-for="work of works" :title="work.title" :subtitle="work.subtitle" :desc="work.desc" :img="work.img" :tags="work.tags" :website="work.website" :source="work.source" :flip="work.flip" />
        </div>
    </section>
</template>

<style lang="scss" scoped>
.section {
    position: relative;

    margin: 0;

    background-color: $bg-color-1;
}

.form-block {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8rem;

    padding: 8rem 0;
}
</style>

<script setup>
const { t } = useI18n();

const works = [
    {
        title: t("works.projects.3.title"),
        subtitle: t("works.projects.3.subtitle"),
        img: "project-polanner",
        tags: ["Nuxt", "MongoDB", "Tauri"],
        desc: t("works.projects.3.desc"),
        website: "https://polanner.com",
    },
    {
        title: t("works.projects.1.title"),
        subtitle: t("works.projects.1.subtitle"),
        img: "project-hoplite",
        tags: ["NEXT.js", "Tebex", "Strapi"],
        desc: t("works.projects.1.desc"),
        website: "https://hoplite.gg",
    },
    {
        title: t("works.projects.2.title"),
        subtitle: t("works.projects.2.subtitle"),
        img: "project-mcss",
        tags: ["Nuxt", "MongoDB", "Java"],
        desc: t("works.projects.2.desc"),
        website: "https://mcss.ladeira.eu",
        source: "https://github.com/dladeira/mcss",
    },
];
</script>
