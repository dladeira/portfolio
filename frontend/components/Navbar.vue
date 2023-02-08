<template>
    <nav class="container-desktop">
        <nuxt-link :href="localePath('/')" @click="scrollTo('about')" :class="router.path == 'bing' ? 'link-selected' : 'link'">{{ $t('navbar.about') }}</nuxt-link>
        <nuxt-link :href="localePath('/')" @click="scrollTo('projects')" :class="router.path == 'bing' ? 'link-selected' : 'link'">{{ $t('navbar.projects') }}</nuxt-link>
        <nuxt-link :href="localePath('/')" class="brand">Ladeira<span class="brand-light">.eu</span></nuxt-link>
        <nuxt-link :href="localePath('/pricing')" :class="router.path == '/pricing' ? 'link-selected' : 'link'">{{ $t('navbar.pricing') }}</nuxt-link>
        <nuxt-link :href="localePath('/contact')" :class="router.path == '/contact' ? 'link-selected' : 'link'">{{ $t('navbar.contact') }}</nuxt-link>
    </nav>
    <nav :class="open ? 'container-mobile-open' : 'container-mobile'">
        <div class="mobile-header">
            <nuxt-link :href="localePath('/')" class="brand">Ladeira<span class="brand-light">.eu</span></nuxt-link>
            <nuxt-img src="/hamburger.svg" alt="hamburger" class="menu" @click="open = !open"></nuxt-img>
        </div>
        <div class="mobile-body" v-if="open">
            <nuxt-link @click="open = false" :href="localePath('/pricing')" :class="router.path == '/pricing' ? 'link-mobile-selected' : 'link-mobile'">{{ $t('navbar.pricing') }}</nuxt-link>
            <nuxt-link @click="open = false" :href="localePath('/contact')" :class="router.path == '/contact' ? 'link-mobile-selected' : 'link-mobile'">{{ $t('navbar.contact') }}</nuxt-link>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
.container-desktop {
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

    @include phone-only {
        display: none;
    }
}

.brand {
    margin: 0 50px;

    font-size: 2.25rem;
    font-weight: 700;
    text-decoration: none;
    color: white;

    @include phone-only {
        margin: 0;
    }
}

.brand-light {
    color: #9FCFF1;
}

.link {
    font-size: 1.25rem;
    text-align: center;
    text-decoration: none;
    color: white;
    
    flex-grow: 1;

    &-selected {
        @extend .link;

        font-weight: 700;
    }
}

// ==========
// MOBILE
// ==========

.container-mobile {
    position: fixed;
    left: 50%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    width: 100%;

    padding: 15px 30px;

    transform: translate(-50%, 0);
    z-index: 2;

    background-color: $blue;

    &-open {
        @extend .container-mobile;
        box-shadow: 0 0 10px 0 rgba(black, 0.5);
    }

    @include not-phone {
        display: none;
    }
}

.mobile-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    height: 100%;
    width: 100%;
}

.mobile-body {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    width: 100%;
}

.link-mobile {
    padding: 20px 0 10px;

    font-size: 1.25rem;
    text-decoration: none;
    color: white;

    &-selected {
        @extend .link-mobile;

        font-weight: 700;
    }
}
</style>

<script setup>
const router = useRoute()
const open = ref(false)

function scrollTo(id) {
    setTimeout(() => {
        const ele = document.getElementById(id)
        window.scrollTo(ele.offsetLeft, ele.offsetTop)
    }, window.location.pathname == "/" ? 0 : 100)
}
</script>