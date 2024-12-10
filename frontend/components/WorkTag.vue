<template>
    <div class="tag-container">
        <nuxt-img class="tag-image" :src="`/tags/${tag}.svg`" />
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
}

.tag-text {
    margin: 0;

    font-weight: 700;
    font-size: 1rem;
    color: white;
}
</style>

<script setup>
const props = defineProps({
    tag: String,
})
</script>
