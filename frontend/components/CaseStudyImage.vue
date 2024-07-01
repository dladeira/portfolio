<template>
    <div class="csi-container">
        <nuxt-img class="csi-img" :src="src" :alt="alt" format="webp" @click="popupOpen = true" />
        <div class="csi-hint">Click to enlarge</div>
        <div :class="popupOpen ? 'csi-popup-open' : 'csi-popup-closed'" @click="popupOpen = false">
            <nuxt-img class="csi-popup-image" :src="src" :alt="alt" loading="lazy" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.csi-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;

    margin: 1rem 0 0.5rem;
}

.csi-img {
    width: 100%;

    border-radius: 10px;

    box-shadow: 0 0 16px 0 rgba(black, 0.1);

    &:hover {
        cursor: pointer;
    }
}

.csi-hint {
    margin: 0.5rem 0 0;

    font-size: 0.75rem;
    color: $gray;
}

.csi-popup {
    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
    width: 100%;

    transition: all $transition 500ms;

    &:hover {
        cursor: pointer;
    }

    &-open {
        @extend .csi-popup;
        background-color: rgba(black, 0.6);
        backdrop-filter: blur(4px);
    }

    &-closed {
        @extend .csi-popup;
        background-color: rgba(black, 0);

        pointer-events: none;
    }

    &-closed .csi-popup-image {
        transform: translateY(100vh);
    }
}

.csi-popup-image {
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

const popupOpen = ref(false)
</script>
