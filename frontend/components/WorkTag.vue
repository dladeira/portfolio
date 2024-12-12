<template>
    <div class="tag-container">
        <NuxtImg class="tag-image" :src="`/tags/${tag}.svg`" :alt="`${tag} logo`" />
        <p class="tag-text">{{ tag }}</p>
    </div>
</template>

<style lang="scss" scoped>
.tag-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 0.4rem;

    opacity: 0.5;
}

.tag-image {
    height: 1.25rem;

    @include tablet-below {
        height: 1rem;
    }
}

.tag-text {
    margin: 0;

    font-weight: 700;
    font-size: 1rem;
    color: white;

    @include tablet-below {
        font-size: 0.85rem;
    }
}
</style>

<script setup>
const props = defineProps({
    tag: String,
})
</script>
