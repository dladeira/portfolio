<template>
    <section class="container">
        <h4 class="subtitle">{{ $t('cta.landing.subtitle') }}</h4>
        <h3 class="title">{{ $t('cta.landing.title') }}</h3>
        <div class="buttons">
            <nuxt-link :href="localePath('/contact')" class="button contact">{{ $t('cta.button1') }}</nuxt-link>
            <nuxt-link :href="localePath('/pricing')" class="button">{{ $t('cta.button2') }}</nuxt-link>
        </div>
    </section>
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
    margin: 0 0 1.25rem;

    font-size: 2rem;
    font-weight: 400;
}

.title {
    margin: 0 0 2rem;

    font-size: 3rem;
    font-weight: 700;
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

    &:hover {
        background-color: darken($gray, 5);
    }
}

.contact {
    margin-right: 2rem;

    background-color: $blue;

    &:hover {
        background-color: darken($blue, 5);
    }
}
</style>

<script setup>
</script>