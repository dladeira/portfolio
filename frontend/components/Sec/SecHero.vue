<template>
    <section class="container">
        <div class="inner-container">
            <div class="main">
                <div class="text">
                    <h1 class="title">
                        Daniel Ladeira
                    </h1>
                    <h2 class="subtitle">
                        Freelance Web Developer
                    </h2>
                </div>
                <div class="buttons">
                    <nuxt-link @click="scrollTo('about')" class="button about">
                        About me
                    </nuxt-link>
                    <nuxt-link @click="scrollTo('contact')" class=" button contact">
                        Contact
                    </nuxt-link>
                </div>
            </div>

            <div class="hero-wrapper" id="hero-wrapper">
                <nuxt-img class="hero" src="/hero.png" format="webp" alt="Hero" lazy="false" id="hero" />
            </div>

            <div class="socials left">
                <nuxt-link class="icon-wrapper" href="https://dribbble.com/dladeira"><nuxt-img src="/icon-dribbble.svg" class="icon" format="webp" alt="Dribbble icon" /></nuxt-link>
                <nuxt-link class="icon-wrapper" href="https://stackoverflow.com/users/9564834/daniel"><nuxt-img src="/icon-so.svg" class="icon" format="webp" alt="StackOverflow icon" /></nuxt-link>
                <nuxt-link class="icon-wrapper" href="https://github.com/dladeira"><nuxt-img src="/icon-gh.svg" class="icon" format="webp" alt="Github icon" /></nuxt-link>
            </div>
            <div class="socials right">
                <nuxt-link :href="switchLocalePath('en')" aria-label="Switch to English"><nuxt-img :class="$i18n.locale == 'en' ? 'flag-active' : 'flag'" src="/flag-us.png" alt="US Flag" /></nuxt-link>
                <nuxt-link :href="switchLocalePath('pl')" aria-label="Zmień na polski"><nuxt-img :class="$i18n.locale == 'pl' ? 'flag-active' : 'flag'" src="/flag-pl.png" alt="PL Flag" /></nuxt-link>
                <nuxt-link :href="switchLocalePath('pt')" aria-label="Muda para portugês"><nuxt-img :class="$i18n.locale == 'pt' ? 'flag-active' : 'flag'" src="/flag-pt.png" alt="PT Flag" /></nuxt-link>
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
    align-items: flex-start;

    height: 100vh;

    margin: 0 auto;

    @include desktop-only {
        width: $content-desktop;
    }

    @include laptop-only {
        width: $content-laptop;
    }
}

.container {
    width: 100%;

    background-image: $gradient-hero;

    overflow: hidden;
}

.main {
    animation: text-in 1s forwards;
    animation-delay: 500ms;

    opacity: 0;
}

.text {
    margin-top: 15rem;
}

.title {
    margin: 0;

    font-weight: 700;
    font-size: 6rem;
    color: white;
}

.subtitle {
    margin: 1.5rem 0 0;

    font-weight: 3;
    font-size: 4rem;
    color: white;
}

.hero {
    position: absolute;
    right: -80px;
    bottom: -900px;
    width: 30rem;

    filter: drop-shadow(-8px -6px 0 black);
    user-select: none;
    opacity: 0;

    transition: all 200ms cubic-bezier(0.165, 0.84, 0.44, 1);
}

.hero-loaded {
    animation: hero-in 1s forwards;
}

@keyframes hero-in {
    0% {
        bottom: -900px;
        filter: blur(10px);
    }

    100% {
        bottom: -160px;
        opacity: 1;
    }
}

@keyframes text-in {
    0% {
        transform: translateY(40px);
        // filter: blur(5px);
        opacity: 0;
    }

    100% {
        transform: translateY(0);
        // filter: blur(0);
        opacity: 1;
    }
}

.buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    margin-top: 3rem;
}

.button {
    padding: 1rem 5rem;

    border-radius: 1000px;

    font-size: 2.5rem;
    font-weight: 400;
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
}

.contact {
    position: relative;

    margin-left: 2.5rem;

    border: 2px solid white;

    background: none;
    color: white;

    box-shadow: none;
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

    margin-bottom: 1rem;

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

.line {
    height: 10vh;
    width: 2px;

    background-color: white;
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
    var hero = document.getElementById('hero')
    hero.addEventListener('load', () => {
        hero.classList.add('hero-loaded')
    })

    setTimeout(() => {
        hero.classList.add('hero-loaded')
    }, 200)
})
</script>