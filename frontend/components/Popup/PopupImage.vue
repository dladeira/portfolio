<template>
    <div :class="popupOpen ? 'wi-container-open' : 'wi-container-closed'" @click="popupOpen = false">
        <nuxt-img class="wi-image" :src="popupImage" :alt="alt" />
    </div>
</template>

<style lang="scss" scoped>
.wi-container {
    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100vh;
    width: 100vw;

    transition: all $transition 500ms;

    overflow: hidden;

    z-index: 100;

    &-open {
        @extend .wi-container;

        background-color: rgba(black, 0.6);
        backdrop-filter: blur(4px);
    }

    &-closed {
        @extend .wi-container;

        pointer-events: none;

        & .wi-image {
            transform: translateY(100vh);
        }
    }
}

.wi-image {
    display: block;

    max-height: 90%;
    max-width: 90%;

    border-radius: 10px;

    transition: transform $transition 500ms;
}
</style>

<script setup>
const props = defineProps({
    src: String,
    alt: String,
})

const popupOpen = useState("popup-image-open")
const popupImage = useState("popup-image-image")
</script>
