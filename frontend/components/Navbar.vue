<template>
    <nav class="container">
        <nuxt-link to="/#about" :class="router.path == 'bing' ? 'link-selected' : 'link'">About</nuxt-link>
        <nuxt-link to="/#projects" :class="router.path == 'bing' ? 'link-selected' : 'link'">Projects</nuxt-link>
        <nuxt-link to="/" class="brand">Ladeira<span class="brand-light">.eu</span></nuxt-link>
        <nuxt-link to="/pricing" :class="router.path == '/pricing' ? 'link-selected' : 'link'">Pricing</nuxt-link>
        <nuxt-link to="/contact" :class="router.path == '/contact' ? 'link-selected' : 'link'">Contact</nuxt-link>
    </nav>
</template>

<style lang="scss" scoped>
.container {
    position: absolute;
    left: 50%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 50%;
    min-width: 800px;

    margin: 15px auto;

    transform: translate(-50%, 0);
    z-index: 2;
}

.brand {
    font-size: 2.25rem;
    font-weight: 700;
    text-decoration: none;
    color: white;
}

.brand-light {
    color: #9FCFF1;
}

.link {
    font-size: 1.25rem;
    text-decoration: none;
    color: white;

    &-selected {
        @extend .link;

        font-weight: 700;
    }
}
</style>

<script setup>
const router = useRoute()
</script>