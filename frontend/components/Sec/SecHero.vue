<template>
    <section class="container">
        <Navbar />
        <Block class="mid-block" notMobile>
            <div class="text">
                <h1 class="title">
                    {{ $t("hero.title") }}
                </h1>
                <h2 class="subtitle">{{ $t("hero.subtitle") }}</h2>
            </div>
        </Block>
        <Block class="bot-block" red>
            <div class="buttons">
                <div class="button-secondary button-mobile" @click="scrollTo('about')">{{ $t("hero.buttons.about") }}</div>
                <div class="button-secondary" @click="scrollTo('works')">{{ $t("hero.buttons.works") }}</div>
                <div class="button-primary" @click="scrollTo('contact')">{{ $t("hero.buttons.contact") }}</div>
            </div>
        </Block>
        <nuxt-img class="arrows" src="/arrows.png" format="webp" alt="Arrow Decorations" />
    </section>
</template>

<style lang="scss" scoped>
.container {
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    height: 100vh;
    width: 100%;

    margin: 0 auto;

    background-color: $bg-color-1;

    overflow: hidden;
}

.top-block {
    height: 25vh;

    width: 100%;
}

.mid-block {
    @include phone-only {
        margin-top: auto;
    }
}

.text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 0;

    margin-bottom: 4rem;
}

.title {
    margin: 0;

    font-weight: 700;
    font-size: 5rem;
    letter-spacing: 2px;
    color: white;

    animation: text-in 1s forwards;
    animation-delay: 500ms;

    opacity: 0;

    @include phone-only {
        font-size: 2.75rem;
    }
}

.subtitle {
    margin: 0;

    font-size: 4rem;
    font-weight: 400;
    letter-spacing: 2px;
    color: rgba(white, 0.2);

    animation: text-in 1s forwards;
    animation-delay: 700ms;

    opacity: 0;

    @include phone-only {
        font-size: 2.75rem;
    }
}

.bot-block {
    flex: 1;

    width: 100%;

    @include phone-only {
        flex: none;

        margin-top: auto;
    }
}

.buttons {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 2rem;

    @include phone-only {
        flex-direction: column;
        align-items: stretch;

        margin-bottom: 3rem;
    }
}

.button-primary,
.button-secondary {
    height: fit-content;

    padding: 1.25rem 6rem;

    font-size: 1.5rem;

    box-shadow: 12px 12px 0 rgba(black, 0.2);
    transition: $shadow-transition;

    &:hover {
        cursor: pointer;

        transform: translate(12px, 12px);
        box-shadow: 0px 0px 0 rgba(black, 0.2);
    }
}

.button-primary {
    background-color: white;
    color: black;
}

.button-secondary {
    background-color: rgba(white, 0.1);
    color: white;
}

.button-mobile {
    @include desktop-only {
        display: none;
    }

    @include laptop-only {
        display: none;
    }

    @include tablet-only {
        display: none;
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

.arrows {
    position: absolute;
    right: -10rem;
    bottom: -10rem;

    width: 55rem;

    @include laptop-only {
        width: 50rem;
    }

    @include tablet-only {
        bottom: -5rem;

        width: 40rem;
    }

    @include phone-only {
        display: none;
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
</script>
