<template>
    <section class="container">
        <div class="inner-container">
            <div class="header">
                <h1 class="title">
                    {{ $t("hero.title") }}
                </h1>
                <h2 class="subtitle">{{ $t("hero.subtitle") }}</h2>
                <div class="buttons">
                    <button class="button-contact" @click="scrollTo('contact')">Contact</button>
                    <button class="button-works" @click="scrollTo('works')">Works</button>
                </div>
            </div>

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
.container {
    height: 100vh;

    background-color: $background-color-1;
}

.inner-container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    height: 100%;

    margin: 0 auto;

    @include resizable-width;

    @include tablet-below {
        align-items: center;
    }
}

.header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    width: 100%;

    margin-top: 30vh;

    @include tablet-below {
        align-items: center;

        margin-top: 12rem;
    }
}

.title {
    margin: 0 0 0.5rem;

    font-weight: 700;
    font-size: 4rem;
    text-align: center;
    color: white;

    animation: text-in 1s forwards;
    animation-delay: 500ms;

    opacity: 0;

    @include tablet-below {
        font-size: 3rem;
    }
}

.subtitle {
    margin: 0.5rem 0 0;

    font-weight: 400;
    font-size: 3rem;
    text-align: center;
    color: rgba(255, 255, 255, 0.4);

    animation: text-in 1s forwards;
    animation-delay: 700ms;

    opacity: 0;

    @include tablet-below {
        font-size: 1.5rem;
    }
}

.buttons {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1.5rem;

    margin-top: 3rem;

    @include tablet-below {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 3rem auto 0;
    }
}

.button-contact,
.button-works {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 3.75rem;
    width: 15rem;

    border: none;

    font-size: 1rem;

    box-shadow: $button-shadow;
    transition: all 200ms $transition-1;

    &:hover {
        cursor: pointer;

        transform: translate(0.5rem, 0.5rem);
        box-shadow: 0 0 0 rgba(black, 0.15);
    }

    @include tablet-below {
        height: 3rem;
        width: 70vw;
    }
}

.button-contact {
    background-color: white;
    color: black;
}

.button-works {
    background-color: rgba(white, 0.1);
    color: white;
}

.socials {
    position: absolute;
    bottom: 0;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    margin-bottom: 0.5rem;

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
    height: 1.25rem;
    width: 2rem;

    border-radius: 3px;

    opacity: 0.3;
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
</style>

<script setup>
function scrollTo(id) {
    setTimeout(
        () => {
            const ele = document.getElementById(id)
            window.scrollTo(ele.offsetLeft, ele.offsetTop)
        },
        window.location.pathname == "/" ? 0 : 100
    )
}
</script>
