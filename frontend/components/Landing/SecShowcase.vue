<template>
    <section class="container" id="projects">
        <div class="content">
            <h3 class="title">{{ $t('projects.title') }}</h3>
            <div class="showcase">
                <LandingProject v-for="project of projects" :name="project.name" :desc="project.desc" :img="project.img"
                    :tags="project.tags" :website="project.website" :source="project.source" />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.container {
    width: 100%;

    padding: 10rem 0;

    background-color: #F6F6F6;

    @include phone-only {
        padding: 5rem 0;
    }
}

.content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    width: 1100px;

    margin: 0 auto;

    @include phone-only {
        width: 80%;
    }
}

.title {
    margin: 0 0 6rem;

    font-size: 2rem;
    font-weight: 700;
}

.showcase {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    width: 100%;

    @include phone-only {
        flex-direction: column;
    }
}
</style>

<script setup>
const { t } = useI18n()

const projects = [
    {
        name: "MCSS",
        img: "project-mcss.png",
        tags: ["NUXT", "Java", "SocketIO"],
        desc: t('projects.project1'),
        website: "https://mcss.ladeira.eu"
    }, {
        name: "Tracker",
        img: "project-tracker.png",
        tags: ["NEXT", "MongoDB"],
        desc: t('projects.project2'),
        source: "https://github.com/dladeira/ltracker"
    }, {
        name: "LCooking",
        img: "project-cooking.png",
        tags: ["React", "MongoDB"],
        desc: t('projects.project3'),
        source: "https://github.com/dladeira/lcooking"
    }
]
</script>