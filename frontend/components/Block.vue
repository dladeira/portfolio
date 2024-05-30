<template>
    <div class="block-container">
        <div :class="'block ' + (blue || red ? (blue ? 'block-blue' : 'block-red') : 'block-transparent')" />
        <slot />
    </div>
</template>

<style lang="scss" scoped>
.block-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: stretch;
}
.block {
    width: $block-width;

    margin: 0 $block-margin 0 $block-left;

    box-shadow: $block-shadow;

    &-blue {
        background-color: $blue;
    }

    &-red {
        background-color: $red;
    }

    &-transparent {
        box-shadow: none;
    }
}
</style>

<script setup>
const props = defineProps({
    blue: Boolean,
    red: Boolean,
});
</script>
