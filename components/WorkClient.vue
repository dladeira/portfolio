<template>
    <component :is="external ? 'a' : 'div'" :href="external" class="person" target="_blank">
        <NuxtImg class="person-image" :src="icon" format="webp" alt="Client profile picture" />
        <div class="person-content">
            <div class="person-header">
                <p class="person-name">{{ name }}</p>
                <NuxtImg v-if="external" src="/icons/external.svg" class="person-external" height="12" alt="External link icon" />
            </div>
            <p class="person-stat">{{ tag }}</p>
        </div>
    </component>
</template>

<style lang="scss" scoped>
.person {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;

    text-decoration: none;

    &:hover .person-external {
        opacity: 1;
        cursor: pointer;
    }
}

.person-image {
    height: 2.5rem;

    border-radius: 1000px;
}

.person-content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.25rem;
}

.person-header {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;

    font-weight: 400;
    color: white;
}

.person-name {
    margin: 0;

    font-size: 0.85rem;
    font-weight: 700;
}

.person-external {
    opacity: 0.2;

    transition: opacity 200ms $transition;
}

.person-stat {
    margin: 0;

    font-size: 0.75rem;
    color: rgba(white, 0.5);
}
</style>

<script setup>
const props = defineProps({
    external: String,
    name: String,
    tag: String,
    icon: String,
})
</script>
