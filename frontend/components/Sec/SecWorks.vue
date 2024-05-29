<template>
    <section class="section" id="works">
        <h3 class="section-title"><span class="section-title-index">02.</span> {{ $t("works.header") }}</h3>
        <div class="content">
            <Project v-for="project of projects" :title="project.title" :subtitle="project.subtitle" :desc="project.desc" :img="project.img" :tags="project.tags" :website="project.website" :source="project.source" :flip="project.flip" />
        </div>
    </section>
</template>

<style lang="scss" scoped>
.section {
    width: 100%;
    background-color: $bg-color-1;
}

.content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    margin: 0 auto;

    @include resizable-width;
}
</style>

<script setup>
const { t } = useI18n();

const projects = [
    {
        title: t("works.projects.1.title"),
        subtitle: t("works.projects.1.subtitle"),
        img: "project-hoplite",
        tags: ["NEXT.js", "Tebex", "Strapi"],
        desc: t("works.projects.1.desc"),
        website: "https://hoplite.gg",
    },
    {
        title: t("works.projects.3.title"),
        subtitle: t("works.projects.3.subtitle"),
        img: "project-polanner",
        tags: ["Nuxt", "MongoDB", "Tauri"],
        desc: t("works.projects.3.desc"),
        website: "https://polanner.com",
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
