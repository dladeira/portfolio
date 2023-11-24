<template>
    <section class="container">
        <div class="blobs">
            <div class="blob blob-1" />
            <div class="blob blob-2" />
            <div class="blob blob-3" />
            <div class="blob blob-4" />
        </div>
        <div class="inner-container">
            <div class="text">
                <h1 class="title">
                    {{ $t("hero.title") }}
                </h1>
                <h2 class="subtitle">{{ $t("hero.subtitle") }}</h2>
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

    overflow: hidden;
}

.text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;

    margin-top: 10rem;

    @include laptop-only {
        margin-top: 11rem;
    }

    @include tablet-only {
        margin-top: 13rem;
    }
}

.title {
    margin: 0;

    font-weight: 700;
    font-size: 7rem;
    letter-spacing: 2px;
    text-align: center;
    color: white;

    animation: text-in 1s forwards;
    animation-delay: 500ms;

    opacity: 0;

    @include laptop-only {
        font-size: 8rem;
    }

    @include tablet-only {
        font-size: 7rem;
    }

    @include phone-only {
        font-size: 10vw;
    }

    @include small-phone-only {
        font-size: 5rem;
    }
}

.subtitle {
    margin: 0.5rem 0 0;

    font-weight: 700;
    font-size: 5.25rem;
    letter-spacing: 2px;
    text-align: center;
    color: $background-color;

    animation: text-in 1s forwards;
    animation-delay: 700ms;

    opacity: 0;

    @include stroke(rgba(white, 0.2), 2px);

    @include laptop-only {
        font-size: 6rem;
    }

    @include tablet-only {
        font-size: 5.5rem;
    }

    @include phone-only {
        font-size: 8vw;
    }

    @include small-phone-only {
        margin-top: 1.25rem;

        font-size: 4rem;
        @include stroke(rgba(white, 0.2), 1px);
    }
}

.hero {
    position: absolute;
    bottom: -8rem;

    width: 24rem;

    margin-top: auto;

    filter: drop-shadow(-10px -6px 0 black);
    opacity: 0;
    user-select: none;

    @include laptop-only {
        width: 27rem;
    }

    @include tablet-only {
        width: 26rem;
    }

    @include phone-only {
        width: 25rem;

        bottom: -3rem;
    }

    @include small-phone-only {
        width: 24rem;
    }
}

.hero-loaded {
    animation: hero-in 1s forwards;
}

.socials {
    position: absolute;
    bottom: 0;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    margin-bottom: 1rem;

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
    height: 1.25rem;
    width: 1.25rem;

    transition: all 200ms cubic-bezier(0.165, 0.84, 0.44, 1);

    filter: invert(40%);

    &:hover {
        filter: invert(100%);
    }
}

.flag {
    height: 1rem;
    width: 1.5rem;

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

    background-color: rgba(#007fdb, 0.2);

    animation: blob-in 1s forwards;
    animation-delay: 1.3s;
    opacity: 0;
}

.blob-1 {
    top: 15vh;
    right: -8vw;

    height: 4rem;
    width: 15rem;
}

.blob-2 {
    top: 68vh;
    right: -12vw;

    height: 4rem;
    width: 17rem;
}

.blob-3 {
    top: 82vh;
    right: -6vw;

    height: 4rem;
    width: 11rem;
}

.blob-4 {
    top: 28vh;
    right: calc(-100vw - 7rem);

    height: 15rem;
    width: 15rem;
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
    setTimeout(
        () => {
            const ele = document.getElementById(id);
            window.scrollTo(ele.offsetLeft, ele.offsetTop);
        },
        window.location.pathname == "/" ? 0 : 100
    );
}

onMounted(() => {
    hero.addEventListener("load", () => {
        var hero = document.getElementById("hero");
        hero.classList.add("hero-loaded");
    });

    setTimeout(() => {
        var hero = document.getElementById("hero");
        hero.classList.add("hero-loaded");
    }, 500);
});
</script>
