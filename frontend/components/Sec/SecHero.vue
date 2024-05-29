<template>
    <section class="container">
        <div class="inner-container">
            <div class="top-block" />
            <div class="top-block-absolute" />
            <div class="text">
                <h1 class="title">
                    {{ $t("hero.title") }}
                </h1>
                <h2 class="subtitle">{{ $t("hero.subtitle") }}</h2>
                <div class="buttons">
                    <div class="button-primary" @click="scrollTo('contact')">Contact</div>
                    <div class="button-secondary" @click="scrollTo('works')">Works</div>
                </div>
            </div>
            <div class="bot-block" />
        </div>
    </section>
</template>

<style lang="scss" scoped>
.container {
    height: 100vh;
    width: 100%;

    margin: 0 auto;

    background-color: $bg-color-1;
}

.inner-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    height: 100%;

    margin: 0 $block-left;
}

.top-block {
    height: 30vh;
    width: $block-width;

    &-absolute {
        @extend .top-block;
        position: absolute;
        z-index: 100;
        background-color: $blue;
    }
}

.text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 0;

    margin-left: calc($block-width + $block-margin);
}

.title {
    margin: 0;

    font-weight: 700;
    font-size: 5rem;
    letter-spacing: 2px;
    text-align: center;
    color: white;

    animation: text-in 1s forwards;
    animation-delay: 500ms;

    opacity: 0;
}

.subtitle {
    margin: 0;

    font-size: 4rem;
    font-weight: 400;
    letter-spacing: 2px;
    text-align: center;
    color: rgba(white, 0.2);

    animation: text-in 1s forwards;
    animation-delay: 700ms;

    opacity: 0;
}

.buttons {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: stretch;
    gap: 2rem;

    transform: translateY(100%);
}

.button-primary,
.button-secondary {
    padding: 1.25rem 6rem;

    font-size: 1.5rem;

    box-shadow: 12px 12px 0 rgba(black, 0.2);
    transition: all 200ms cubic-bezier(0.165, 0.84, 0.44, 1);

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

.bot-block {
    flex-grow: 1;

    width: $block-width;

    background-color: $red;
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
