<template>
    <section class="section" id="projects">
        <h3 class="section-title"><span class="section-title-index">02.</span> {{ $t('works.header') }}</h3>
        <div class="content">
            <Project v-for="project of projects" :align="(projects.indexOf(project) % 2) == 0" :name="project.name" :desc="project.desc" :img="project.img" :tags="project.tags" :website="project.website" :source="project.source" :view="project.view" />
        </div>
    </section>
</template>

<style lang="scss" scoped>
.section {
    width: 100%;

    padding: 10rem 0;
}

.section-title {
    width: fit-content;

    margin: 0 auto 9rem;

    font-size: 3rem;

    &-index {
        color: #1FB3E2;
    }
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
const { t } = useI18n()

const projects = [
    {
        name: t('works.projects.1.title'),
        img: "project-mcss",
        tags: ["Vue/NUXT", "Java", "SocketIO"],
        desc: t('works.projects.1.desc'),
        website: "https://mcss.ladeira.eu"
    }, {
        name: t('works.projects.2.title'),
        img: "project-tracker",
        tags: ["React/NEXT", "MongoDB"],
        desc: t('works.projects.2.desc'),
        source: "https://github.com/dladeira/ltracker"
    }, {
        name: t('works.projects.3.title'),
        img: "project-prototype",
        tags: ["Figma"],
        desc: t('works.projects.3.desc'),
        view: "https://dribbble.com/dladeira"
    }
]
</script>