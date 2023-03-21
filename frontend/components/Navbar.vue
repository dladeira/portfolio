<template>
    <nav class="container">
        <nuxt-link :href="localePath('/')" class="brand">Ladeira<span class="brand-light">.eu</span></nuxt-link>
        <nuxt-link :href="localePath('/')" @click="scrollTo('about')" class="link">
            <nuxt-img class="icon" src="/icon-user.svg" />
            About me
        </nuxt-link>
        <nuxt-link :href="localePath('/')" @click="scrollTo('projects')" class="link">
            <nuxt-img class="icon" src="/icon-resume.svg" />
            Works
        </nuxt-link>
        <nuxt-link :href="localePath('/')" @click="scrollTo('contact')" class="link">
            <nuxt-img class="icon" src="/icon-contact.svg" />
            Contact
        </nuxt-link>
    </nav>
</template>

<style lang="scss" scoped>
.container {
    position: absolute;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    min-width: 800px;

    margin: 30px auto;
    z-index: 2;

    @include desktop-only {
        width: $content-desktop;
        left: calc((100vw - $content-desktop) / 2);
    }

    @include laptop-only {
        width: $content-laptop;
        left: calc((100vw - $content-laptop) / 2);
    }
}

.brand {
    margin: 0 auto 0 0;

    font-size: 2.25rem;
    font-weight: 700;
    text-decoration: none;
    color: white;
}

.brand-light {
    color: #9FCFF1;
}

.link {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    border-bottom: 1px solid transparent;


    padding-bottom: 5px;
    margin: 0 2rem;

    font-size: 1.25rem;
    text-align: center;
    text-decoration: none;
    color: white;

    &:hover {
        border-color: white;
    }
}

.icon {
    margin-right: 0.5rem;
}
</style>

<script setup>
function scrollTo(id) {
    setTimeout(() => {
        const ele = document.getElementById(id)
        window.scrollTo(ele.offsetLeft, ele.offsetTop)
    }, window.location.pathname == "/" ? 0 : 100)
}
</script>