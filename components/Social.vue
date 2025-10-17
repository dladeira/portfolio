<template>
    <component :is="link ? 'a' : 'div'" class="social-wrapper" :href="link" target="_blank">
        <NuxtImg class="social-icon" :src="icon" alt="Social Media Icon" height="20" width="20" :style="{ transform: scale ? `scale(${scale})` : 'scale(1)' }" />
        <p class="social-text">{{ text }}</p>
    </component>
</template>

<style lang="scss" scoped>
.social-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 0.75rem;

    opacity: 0.5;

    transition: $transition 200ms opacity;

    text-decoration: none;
    color: white;

    &:hover {
        opacity: 1;
    }
}

.social-icon {
    width: 1.25rem;
}

.social-text {
    margin: 0;

    font-weight: 400;
    font-size: 1rem;
    color: white;
}
</style>

<script setup>
const props = defineProps({
    icon: String,
    text: String,
    link: String,
    scale: Number,
})
</script>
