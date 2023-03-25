<template>
    <section class="container">
        <div class="blobs">
            <div class="blob blob-1" />
            <div class="blob blob-2" />
            <div class="blob blob-3" />
            <div class="blob blob-4" />
        </div>
        <div class="inner-container">
            <div class="main">
                <div class="text">
                    <h1 class="title">
                        {{ $t('hero.title') }}
                    </h1>
                    <h2 class="subtitle">
                        {{ $t('hero.subtitle') }}
                    </h2>
                </div>
                <div class="buttons">
                    <nuxt-link @click="scrollTo('about')" class="button about">
                        {{ $t('hero.button1') }}
                    </nuxt-link>
                    <nuxt-link @click="scrollTo('contact')" class=" button contact">
                        {{ $t('hero.button2') }}
                    </nuxt-link>
                </div>
            </div>

            <nuxt-img class="hero" src="/hero.png" format="webp" alt="Hero" lazy="false" id="hero" />

            <div class="socials left">
                <nuxt-link class="icon-wrapper" href="https://dribbble.com/dladeira"><nuxt-img src="/icon-dribbble.svg" class="icon" format="webp" alt="Dribbble icon" /></nuxt-link>
                <nuxt-link class="icon-wrapper" href="https://stackoverflow.com/users/9564834/daniel"><nuxt-img src="/icon-so.svg" class="icon" format="webp" alt="StackOverflow icon" /></nuxt-link>
                <nuxt-link class="icon-wrapper" href="https://github.com/dladeira"><nuxt-img src="/icon-gh.svg" class="icon" format="webp" alt="Github icon" /></nuxt-link>
            </div>
            <div class="socials right">
                <nuxt-link class="flag-wrapper" :href="switchLocalePath('en')" aria-label="Switch to English"><nuxt-img :class="$i18n.locale == 'en' ? 'flag-active' : 'flag'" src="/flag-us.png" alt="US Flag" /></nuxt-link>
                <nuxt-link class="flag-wrapper" :href="switchLocalePath('pl')" aria-label="Zmień na polski"><nuxt-img :class="$i18n.locale == 'pl' ? 'flag-active' : 'flag'" src="/flag-pl.png" alt="PL Flag" /></nuxt-link>
                <nuxt-link class="flag-wrapper" :href="switchLocalePath('pt')" aria-label="Muda para portugês"><nuxt-img :class="$i18n.locale == 'pt' ? 'flag-active' : 'flag'" src="/flag-pt.png" alt="PT Flag" /></nuxt-link>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.container,
.inner-container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    height: 100vh;

    margin: 0 auto;

    @include resizable-width;
}

.container {
    width: 100%;

    background-image: $gradient-hero;

    overflow: hidden;
}

.main {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    width: 100%;

    animation: text-in 1s forwards;
    animation-delay: 500ms;

    opacity: 0;
}

.text {
    margin-top: 15rem;

    @include phone-only {
        margin-top: 10rem;
    }
}

.title {
    margin: 0;

    font-weight: 700;
    font-size: 6rem;
    color: white;

    @include phone-only {
        width: 100%;

        font-size: 5rem;
        line-height: 5rem;
        text-align: center;
    }
}

.subtitle {
    width: 45vw;

    margin: 1.5rem 0 0;

    font-weight: 3;
    font-size: 4rem;
    line-height: 5rem;
    color: white;

    @include laptop-only {
        max-width: 80vw;
    }

    @include tablet-only {
        max-width: 80vw;
    }

    @include phone-only {
        width: 90%;

        margin: 1rem auto 0;

        font-size: 2.75rem;
        line-height: 2.75rem;
        text-align: center;
    }
}

.hero {
    position: absolute;
    right: -50px;
    bottom: -160px;

    width: 30rem;

    margin-top: auto;

    filter: drop-shadow(-12px -8px 0 black);
    opacity: 0;
    user-select: none;

    @include phone-only {
        position: static;
        margin-top: 3rem;

        width: 20rem;
    }
}

.hero-loaded {
    animation: hero-in 1s forwards;
}

.buttons {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    margin-top: 2rem;


    @include phone-only {
        flex-direction: column;
        justify-content: center;

        width: 90%;

        margin: 1.5rem auto 0;
    }
}

.button {
    padding: 1rem 5rem;

    border-radius: 1000px;

    font-size: 2.25rem;
    font-weight: 400;
    text-align: center;
    text-decoration: none;
    background-color: white;
    color: black;

    box-shadow: 8px 8px 0 0 #007FDB;
    transition: all 200ms cubic-bezier(0.165, 0.84, 0.44, 1);

    &:hover {
        cursor: pointer;
        box-shadow: none;
        transform: translate(8px, 8px);
    }

    @include phone-only {
        width: 90%;
        max-width: 250px;

        padding: 1.25rem 0rem;

        font-size: 1.25rem;
    }
}

.contact {
    position: relative;

    margin-left: 2.5rem;

    border: 2px solid white;

    background: none;
    color: white;

    box-shadow: none;

    @include phone-only {
        margin: 2rem 0 0;
    }
}

.contact:hover::after {
    top: 0;
    left: 0;
}

.contact::after {
    position: absolute;
    top: 8px;
    left: 8px;

    height: 100%;
    width: 100%;

    border-radius: 1000px;
    border: transparent;

    background-color: rgba(white, 0.2);

    content: '';
}

.socials {
    position: absolute;
    bottom: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    animation: socials-in 1s forwards;
    animation-delay: 1.3s;
    opacity: 0;
}

.left {
    left: 0;
}

.right {
    right: 0;
}

.icon {
    height: 24px;
    width: 24px;

    transition: all 200ms cubic-bezier(0.165, 0.84, 0.44, 1);

    filter: invert(60%);

    &:hover {
        filter: invert(100%);
    }

    &-wrapper {
        margin-bottom: 1rem;
    }
}

.flag {
    height: 20px;
    width: 30px;

    border-radius: 3px;

    opacity: 0.5;
    transition: all 200ms cubic-bezier(0.165, 0.84, 0.44, 1);

    &-active {
        @extend .flag;

        opacity: 1;
    }

    &:hover {
        cursor: pointer;
        opacity: 1;
    }

    &-wrapper {
        margin-bottom: 1rem;
    }
}

.line {
    height: 10vh;
    width: 2px;

    background-color: white;
}

@keyframes hero-in {
    0% {
        transform: translate(0, 100%);
        opacity: 1;
    }

    100% {
        transform: translate(0, 0%);
        opacity: 1;
    }
}

@keyframes text-in {
    0% {
        transform: translateY(70px);
        opacity: 0;
    }

    100% {
        transform: translateY(0);
        opacity: 1;
    }
}

@keyframes socials-in {
    0% {
        transform: translateY(200px);
        opacity: 1;
    }

    100% {
        transform: translateY(0);
        opacity: 1;
    }
}

// ==========
// BLOBS
// ==========

.blobs {
    position: relative;
    margin-right: auto;

    @include phone-only {
        display: none;
    }
}

.blob {
    position: absolute;

    border-radius: 1000px;

    background-color: rgba(#007FDB, 0.5);

    animation: blob-in 1s forwards;
    animation-delay: 1.3s;
    opacity: 0;
}

.blob-1 {
    top: 15vh;
    left: -8vw;

    height: 8vh;
    width: 14vw;
}

.blob-2 {
    top: 68vh;
    left: -2vw;

    height: 8vh;
    width: 16vw;
}

.blob-3 {
    top: 82vh;
    left: -2vw;

    height: 8vh;
    width: 10vw;
}

.blob-4 {
    top: 28vh;
    right: -107vw;

    height: 30vh;
    width: 30vh;
}

@keyframes blob-in {
    0% {
        transform: scale(0);
        opacity: 1;
    }

    100% {
        transform: scale(1);
        opacity: 1;
    }
}
</style>

<script setup>
function scrollTo(id) {
    setTimeout(() => {
        const ele = document.getElementById(id)
        window.scrollTo(ele.offsetLeft, ele.offsetTop)
    }, window.location.pathname == "/" ? 0 : 100)
}

onBeforeMount(() => {
    hero.addEventListener('load', () => {
        var hero = document.getElementById('hero')
        hero.classList.add('hero-loaded')
    })

    setTimeout(() => {
        var hero = document.getElementById('hero')
        hero.classList.add('hero-loaded')
    }, 500)
})
</script>