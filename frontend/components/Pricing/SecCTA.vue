<template>
    <div class="container">
        <div class="subtitle">{{ $t('cta.pricing.subtitle') }}</div>
        <div class="title">{{ $t('cta.pricing.title') }}</div>
        <div class="buttons">
            <nuxt-link :href="localePath('/contact')" class="button contact">{{ $t('cta.button1') }}</nuxt-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    padding: 6rem 0;

    background-color: white;
}

.subtitle {
    margin-bottom: 1.25rem;

    font-size: 2rem;
    font-weight: 400;
}

.title {
    margin-bottom: 2rem;

    font-size: 3rem;
    font-weight: 700;

    @include phone-only {
        margin-bottom: 3.5rem;

        font-size: 2.5rem;
    }
}

.buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.button {
    padding: 1rem 3rem;

    font-size: 1.75rem;
    font-weight: 400;
    text-decoration: none;
    background-color: $gray;
    color: white;

    @include phone-only {
        padding: 1rem 3rem;
    }

    &:hover {
        background-color: darken($gray, 5);
    }
}

.contact {
    margin-right: 2rem;

    background-color: $navy;

    @include phone-only {
        margin: 0 0 1rem 0;
    }

    &:hover {
        background-color: darken($navy, 5);
    }
}
</style>

<script setup>
</script>