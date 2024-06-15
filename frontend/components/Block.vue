<template>
    <div :class="`block-container ${notMobile ? 'block-container-not-mobile' : ''}`">
        <div :class="`block ${blue || red ? (blue ? 'block-blue' : 'block-red') : 'block-transparent'} ${notMobile ? 'block-not-mobile' : ''}`" />
        <slot />
    </div>
</template>

<style lang="scss" scoped>
.block-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: stretch;

    &-not-mobile {
        @include phone-only {
            margin-left: 3rem;
        }
    }
}
.block {
    width: 5rem;

    margin: 0 5rem;

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

    &-not-mobile {
        @include phone-only {
            display: none;
        }
    }

    @include phone-only {
        width: 4rem;

        margin: 0 2rem 0 3rem;
    }
}
</style>

<script setup>
const props = defineProps({
    blue: Boolean,
    red: Boolean,
    notMobile: Boolean,
});
</script>
