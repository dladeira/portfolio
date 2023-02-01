<template>
    <section class="container">
        <div class="inner-container">
            <div class="text">
                <h1 class="title">
                    <span class="title1">Daniel</span>
                    <span class="title2">Ladeira</span>
                </h1>
                <h2 class="subtitle">
                    <span :class="$i18n.locale == 'en' ? 'subtitle1' : $i18n.locale == 'pl' ? 'subtitle1-small' : 'subtitle1-xs'">{{ $t('hero.subtitle1') }}</span>
                    <span :class="$i18n.locale != 'pl' ? 'subtitle2' : 'subtitle2-small'">{{ $t('hero.subtitle2') }}</span>
                </h2>
            </div>
            <div class="hero-wrapper" id="hero-wrapper">
                <nuxt-img class="hero" src="/hero.png" format="webp" alt="Hero" />
            </div>

            <div class="buttons">
                <nuxt-link :href="localePath('/contact')" class="button contact">{{ $t('hero.button1') }}</nuxt-link>
                <nuxt-link :href="localePath('/') + '#projects'" class="button showcase">{{ $t('hero.button2') }}</nuxt-link>
            </div>

            <div class="socials left">
                <nuxt-link class="icon-wrapper" href="mailto: daniel@ladeira.eu"><nuxt-img src="/icon-mail.svg" class="icon" format="webp" alt="Mail icon" /></nuxt-link>
                <nuxt-link class="icon-wrapper" href="https://stackoverflow.com/users/9564834/daniel"><nuxt-img src="/icon-so.svg" class="icon" format="webp" alt="StackOverflow icon" /></nuxt-link>
                <nuxt-link class="icon-wrapper" href="https://github.com/dladeira"><nuxt-img src="/icon-gh.svg" class="icon" format="webp" alt="Github icon" /></nuxt-link>
                <div class="line" />
            </div>
            <div class="socials right">
                <nuxt-link :href="switchLocalePath('en')" aria-label="Switch to English"><nuxt-img :class="$i18n.locale == 'en' ? 'flag-active' : 'flag'" src="/flag-us.png" alt="US Flag" /></nuxt-link>
                <nuxt-link :href="switchLocalePath('pl')" aria-label="Zmień na polski"><nuxt-img :class="$i18n.locale == 'pl' ? 'flag-active' : 'flag'" src="/flag-pl.png" alt="PL Flag" /></nuxt-link>
                <nuxt-link :href="switchLocalePath('pt')" aria-label="Muda para portugês"><nuxt-img :class="$i18n.locale == 'pt' ? 'flag-active' : 'flag'" src="/flag-pt.png"  alt="PT Flag"/></nuxt-link>
                <div class="line" />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.container,
.inner-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    height: 100vh;

    overflow: hidden;
}

.container {
    background-image: $gradient-main;
}

.inner-container {
    position: relative;

    width: 1150px;
    max-width: 80%;
}

.text {
    position: relative;

    width: 100%;

    margin-top: 11.25rem;

    @include phone-only {
        margin-top: 6rem;
    }
}

.title,
.subtitle {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: white;

    margin: 0;

    font-weight: 900;

    @include phone-only {
        flex-direction: column;
        align-items: flex-start;
    }
}

.subtitle {
    position: absolute;
    top: 170px;
    align-items: flex-start;

    width: 100%;

    color: #9FCFF1;

    @include phone-only {
        position: relative;
        top: 0;
    }
}

.title1 {
    font-size: 10rem;
}

.title2 {
    font-size: 8rem;
}

.subtitle1 {
    font-size: 6rem;

    &-small {
        font-size: 5rem;
    }

    &-xs {
        font-size: 4.5rem;
    }
}

.subtitle2 {
    font-size: 4rem;

    &-small {
        font-size: 3rem;
    }
}

.title1,
.title2 {
    @include phone-only {
        font-size: 6rem;
    }
}

.subtitle1,
.subtitle2 {
    @include phone-only {
        font-size: 3.5rem;
    }
}

.hero {
    width: 450px;

    transform: translate(5px, -120px);
    user-select: none;

    @include phone-only {
        width: 300px;
        transform: translate(-15px, 20px);
    }
}

.buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    position: absolute;
    bottom: 9rem;

    @include phone-only {
        display: none;
    }
}

.button {
    padding: 14px 48px;

    font-size: 2.25rem;
    font-weight: 400;
    text-decoration: none;
    background-color: $gray;
    color: white;

    box-shadow: 8px 8px 0 0 rgba(black, 0.75);

    &:hover {
        box-shadow: none;

        box-shadow: 4px 4px 0 0 rgba(black, 0.75);
        transform: translate(4px, 4px);
    }
}

.contact {
    margin-right: 2.5rem;
    background-color: $darkblue;
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
    height: 20px;
    width: 20px;

    filter: invert(100%);

    &:hover {
        filter: invert(80%);
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
    height: 15vh;
    width: 2px;

    background-color: white;
}
</style>

<script setup>
function onMouseMove(e) {
    const hero = document.getElementById('hero-wrapper')
    const [x, y] = getPixelsOffCenter(e.clientX, e.clientY)
    const multiplier = 0.02

    hero.style.transform = `translate(${Math.round(x * multiplier)}px, ${Math.round(y * multiplier)}px)`
}

function getPixelsOffCenter(x, y) {
    const newX = x - (window.screen.width / 2)
    const newY = y - (window.screen.height / 2)

    return [newX, newY]
}

onMounted(() => {
    document.addEventListener('mousemove', onMouseMove)
})

onBeforeUnmount(() => {
    document.removeEventListener('mousemove', onMouseMove)
})
</script>