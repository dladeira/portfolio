<template>
    <section class="section" id="projects">
        <h3 class="section-title"><span class="section-title-index">02.</span> Works</h3>
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

    @include desktop-only {
        width: $content-desktop;
    }

    @include laptop-only {
        width: $content-laptop;
    }
}
</style>

<script setup>
const { t } = useI18n()

const projects = [
    {
        name: "MCSS",
        img: "project-mcss",
        tags: ["Vue/NUXT", "Java", "SocketIO"],
        desc: `A production ready, SEO optimized Minecraft server statistics website. Project showcases good use of space and hierarchy to present a lot of information using a modern dark mode dashboard design.`,
        website: "https://mcss.ladeira.eu"
    }, {
        name: "Tracker",
        img: "project-tracker",
        tags: ["React/NEXT", "MongoDB"],
        desc: `A calendar application use for time tracking. Minimalist and light-theme design aimed at solving a very specific problem, what am I spending too much and too little time on?`,
        source: "https://github.com/dladeira/ltracker"
    }, {
        name: "Website Prototypes",
        img: "project-prototype",
        tags: ["Figma"],
        desc: `A collection of website designs for local businesses. Designed using a prototyping tool called Figma. Features unique and modern design elements and information packed pages.`,
        view: "https://dribbble.com/dladeira"
    }
]
</script>