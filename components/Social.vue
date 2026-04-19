<template>
    <component
        :is="link ? 'a' : 'div'"
        class="social-wrapper"
        :class="{ 'social-wrapper--icon-only': iconOnly, 'social-wrapper--compact': compact }"
        :href="link"
        target="_blank"
        :aria-label="iconOnly && text ? text : undefined"
    >
        <NuxtImg
            class="social-icon"
            :src="icon"
            :alt="iconOnly && text ? '' : 'Social Media Icon'"
            :height="compact ? 16 : 20"
            :width="compact ? 16 : 20"
            :style="{ transform: scale ? `scale(${scale})` : 'scale(1)' }"
        />
        <p v-if="!iconOnly" class="social-text">{{ text }}</p>
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

    &--icon-only {
        gap: 0;
    }

    &--compact .social-icon {
        width: 1rem;
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
defineProps({
    icon: String,
    text: String,
    link: String,
    scale: String,
    iconOnly: Boolean,
    compact: Boolean,
})
</script>
