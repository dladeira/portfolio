<template>
    <div class="container">
        <div class="title">All prices are just estimates, for actual quotes <nuxt-link :href="localePath('/contact')" class="contact">contact me</nuxt-link></div>
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
}

.contact {
    text-decoration: underline;
    color: $blue;
}
</style>

<script setup>
</script>