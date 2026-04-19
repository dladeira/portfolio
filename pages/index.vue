<template>
    <div class="home">
        <div class="home-content">
            <Hero />
            <AboutMe />
            <Experience />
            <Contact />
        </div>
        <div class="home-hero-wrapper">
            <NuxtImg class="home-hero-fixed" src="/hero.svg" alt="" aria-hidden="true" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.home {
    position: relative;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;

    width: 100%;

    padding-right: min(34vw, 24rem);
    padding-bottom: 10rem;

    @include tablet-below {
        padding-right: 0;
        padding-bottom: 2rem;
    }
}

.home-content {
    position: relative;
    z-index: 1;

    display: flex;
    flex-direction: column;
    gap: 10rem;

    width: 100%;

    @include tablet-below {
        gap: 7rem;
    }
}

.home-hero-wrapper {
    margin-left: auto;
}

.home-hero-fixed {
    position: fixed;

    top: 20%;

    width: 30rem;

    animation: slide-from-top $animation-duration forwards;
    opacity: 0.001;

    @include tablet-below {
        display: none;
    }
}
</style>
