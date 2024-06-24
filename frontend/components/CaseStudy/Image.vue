<template>
    <div class="csi-container">
        <nuxt-img class="csi-img" :src="src" :alt="alt" format="webp" />
        <div class="csi-hint">Click to enlarge</div>
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
}

.csi-hint {
    margin: 0.5rem 0 0;

    font-size: 0.75rem;
    color: $gray;
}
</style>

<script setup>
const props = defineProps({
    src: String,
    alt: String,
})
</script>
