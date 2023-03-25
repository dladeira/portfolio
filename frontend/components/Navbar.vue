<template>
    <nav class="container" id="navbar-container">
        <div class="inner-container">
            <div class="brand">
                <nuxt-link :href="localePath('/')" class="brand">Ladeira<span class="brand-light">.eu</span></nuxt-link>
            </div>
            <div class="links">
                <nuxt-link :href="localePath('/')" @click="scrollTo('about')" class="link">
                    <nuxt-img class="icon" src="/icon-user.svg" />
                    {{ $t('navbar.link1') }}
                </nuxt-link>
                <nuxt-link :href="localePath('/')" @click="scrollTo('projects')" class="link">
                    <nuxt-img class="icon" src="/icon-resume.svg" />
                    {{ $t('navbar.link2') }}
                </nuxt-link>
                <nuxt-link :href="localePath('/')" @click="scrollTo('contact')" class="link">
                    <nuxt-img class="icon" src="/icon-contact.svg" />
                    {{ $t('navbar.link3') }}
                </nuxt-link>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
.container {
    position: fixed;

    width: 100%;

    backdrop-filter: blur(20px);
    transition: all 200ms cubic-bezier(0.165, 0.84, 0.44, 1);
    z-index: 4;
}

.container-effect {
    background-color: rgba(black, 0.1);
    box-shadow: 0px 0px 40px 40px rgba(black, 0.2);
}

.inner-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    width: 800px;

    margin: 30px auto;

    opacity: 0;
    z-index: 2;

    animation: navbar-in 1s forwards;
    animation-delay: 500ms;

    @include resizable-width;

    @include phone-only {
        flex-direction: column;
        justify-content: center;

        width: 90%;

        margin: 1.75rem auto 1.25rem;
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

    @include phone-only {
        margin: 0 auto 1.5rem;

        font-size: 3rem;
    }
}

.brand-light {
    color: #9FCFF1;
}

.links {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
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

    @include phone-only {
        height: 16px;
        width: 16px;
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
</style>

<script setup>

function scrollTo(id) {
    setTimeout(() => {
        const ele = document.getElementById(id)
        window.scrollTo(ele.offsetLeft, ele.offsetTop)
    }, window.location.pathname == "/" ? 0 : 100)
}

function listener() {
    var nav = document.getElementById('navbar-container')

    if (window.scrollY > 0) {
        if (!nav.classList.contains('container-effect'))
            nav.classList.add('container-effect')
    } else {
        if (nav.classList.contains('container-effect'))
            nav.classList.remove('container-effect')
    }
}

onBeforeMount(() => {
    document.addEventListener('scroll', listener)
})

onBeforeUnmount(() => {
    document.removeEventListener('scroll', listener)
})
</script>