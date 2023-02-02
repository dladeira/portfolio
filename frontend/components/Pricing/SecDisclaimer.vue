<template>
    <div class="container">
        <div class="title">{{$t('services.disclaimer1')}} <nuxt-link :href="localePath('/contact')" class="contact">{{$t('services.disclaimer2')}}</nuxt-link></div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    width: 100%;

    padding: 3rem 0;

    background-color: white;
}

.title {
    width: fit-content;

    margin: 0 auto;

    font-size: 2rem;
    font-weight: 700;
    color: black;

    @include phone-only {
        width: 80%;

        font-size: 1.5rem;
        font-weight: 400;
        text-align: center;
        line-height: 2.5rem;
    }
}

.contact {
    text-decoration: underline;
    color: $blue;
}
</style>

<script setup>
</script>