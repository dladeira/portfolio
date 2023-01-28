<template>
    <div class="container">
        <div class="content">
            <div class="title">Project Showcase</div>
            <div class="showcase">
                <LandingProject v-for="project of projects" :name="project.name" :desc="project.desc" :img="project.img" :tags="project.tags" :website="project.website" :source="project.source" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    width: 100%;

    padding: 10rem 0;

    background-color: #F6F6F6;
}

.content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    width: 1100px;

    margin: 0 auto;
}

.title {
    margin-bottom: 6rem;

    font-size: 2rem;
    font-weight: 700;
}

.showcase {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    width: 100%;
}
</style>

<script setup>
const projects = [
    {
        name: "MCSS",
        img: "project-mcss.png",
        tags: ["NUXT", "Java", "SocketIO"],
        desc: "A production ready, SEO optimized Minecraft server statistics website. Project showcases good use of space and hierarchy to present a lot of information using a modern dark mode dashboard design.",
        website: "https://mcss.ladeira.eu"
    }, {
        name: "Tracker",
        img: "project-tracker.png",
        tags: ["NEXT", "MongoDB"],
        desc: "A calendar application use for time tracking. Minimalist and light-theme design aimed at solving a very specific problem, what am I spending too much and too little time on?",
        source: "https://github.com/dladeira/ltracker"
    }, {
        name: "LCooking",
        img: "project-cooking.png",
        tags: ["React", "MongoDB"],
        desc: "A simple cooking website showcasing proficiency in using React and hooking it up with a custom built API server. Focus was placed on the back end and good code practices using React.",
        source: "https://github.com/dladeira/lcooking"
    }
]
</script>