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

    opacity: 0;
    z-index: 2;

    animation: navbar-in 1s forwards;
    animation-delay: 500ms;


    @include desktop-only {
        width: $content-desktop;
        left: calc((100vw - $content-desktop) / 2);
    }

    @include laptop-only {
        width: $content-laptop;
        left: calc((100vw - $content-laptop) / 2);
    }
}

@keyframes navbar-in {
    0% {
        transform: translateY(-100px);
    }

    100% {
        transform: translateY(0);
        opacity: 1;
    }
}

.brand {
    margin: 0 auto 0 0;

    font-size: 2.25rem;
    font-weight: 700;
    text-decoration: none;
    color: white;

    transition: all 200ms cubic-bezier(0.165, 0.84, 0.44, 1);

    &:hover {
        transform: scale(0.9);
    }
}

.brand-light {
    color: #9FCFF1;
}

.link {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    border-bottom: 1px solid transparent;


    padding: 0.5rem;
    margin: 0 1rem;

    font-size: 1.25rem;
    text-align: center;
    text-decoration: none;
    color: white;

    transition: all 200ms cubic-bezier(0.165, 0.84, 0.44, 1);

    overflow: hidden;

    &:hover {
        transform: scale(0.9);
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