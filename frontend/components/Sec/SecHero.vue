<template>
    <section class="container" id="hero">
        <div class="inner-container">
            <div class="header">
                <h1 class="title">
                    {{ $t("hero.title") }}
                </h1>
                <h2 class="subtitle">{{ $t("hero.subtitle") }}</h2>
            </div>

            <div class="socials left">
                <nuxt-link class="icon-wrapper" href="https://dribbble.com/dladeira"><nuxt-img src="/icons/dribbble.svg" class="icon" format="webp" alt="Dribbble icon" /></nuxt-link>
                <nuxt-link class="icon-wrapper" href="https://stackoverflow.com/users/9564834/daniel"><nuxt-img src="/icons/stack-overflow.svg" class="icon" format="webp" alt="StackOverflow icon" /></nuxt-link>
                <nuxt-link class="icon-wrapper" href="https://github.com/dladeira"><nuxt-img src="/icons/github.svg" class="icon" format="webp" alt="Github icon" /></nuxt-link>
            </div>
            <div class="socials right">
                <nuxt-link class="flag-wrapper" :href="switchLocalePath('en')" aria-label="Switch to English"><nuxt-img :class="$i18n.locale == 'en' ? 'flag-active' : 'flag'" src="/flags/us.png" alt="US Flag" /></nuxt-link>
                <nuxt-link class="flag-wrapper" :href="switchLocalePath('pl')" aria-label="Zmień na polski"><nuxt-img :class="$i18n.locale == 'pl' ? 'flag-active' : 'flag'" src="/flags/pl.png" alt="PL Flag" /></nuxt-link>
                <nuxt-link class="flag-wrapper" :href="switchLocalePath('pt')" aria-label="Muda para portugês"><nuxt-img :class="$i18n.locale == 'pt' ? 'flag-active' : 'flag'" src="/flags/pt.png" alt="PT Flag" /></nuxt-link>
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
    align-items: center;

    width: 100%;

    margin-top: 30vh;

    animation: from-bottom 1s forwards;
    animation-delay: 500ms;

    opacity: 0;

    @include tablet-below {
        align-items: center;

        margin-top: 12rem;
    }
}

.title {
    margin: 0 0 0.5rem;

    font-weight: 700;
    font-size: 6rem;
    text-align: center;
    color: white;

    @include tablet-below {
        font-size: 4rem;
    }
}

.subtitle {
    margin: 0;

    font-weight: 400;
    font-size: 2.5rem;
    text-align: center;
    color: rgba(white, 0.4);

    @include tablet-below {
        font-size: 2rem;
    }
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

    animation: from-bottom 1s forwards;
    animation-delay: 700ms;
    opacity: 0;
}

.left {
    left: 0;
}

.right {
    right: 0;
}

.icon {
    height: 1.5rem;
    width: 1.5rem;

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

@keyframes from-bottom {
    0% {
        transform: translateY(70px);
        opacity: 0;
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
