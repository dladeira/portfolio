<template>
    <nav class="container" id="navbar-container">
        <div class="inner-container">
            <div class="brand" @click="scrollTo('hero')">
                <nuxt-link href="/" class="brand">Ladeira<span class="brand-light">.eu</span></nuxt-link>
            </div>
            <div class="links">
                <nuxt-link href="/about" :class="route.path == '/about' ? 'link-active' : 'link'">
                    <nuxt-img class="icon" src="/icons/navbar/about.svg" />
                    <div class="link-text">{{ $t("navbar.link1") }}</div>
                </nuxt-link>
                <nuxt-link href="/works" :class="route.path == '/works' ? 'link-active' : 'link'">
                    <nuxt-img class="icon" src="/icons/navbar/works.svg" />
                    <div class="link-text">{{ $t("navbar.link2") }}</div>
                </nuxt-link>
                <nuxt-link href="/contact" :class="route.path == '/contact' ? 'link-active' : 'link'">
                    <nuxt-img class="icon" src="/icons/navbar/contact.svg" />
                    <div class="link-text">{{ $t("navbar.link3") }}</div>
                </nuxt-link>
            </div>
            <div class="flags">
                <nuxt-link class="flag-wrapper" :href="switchLocalePath('en')" aria-label="Switch to English"><nuxt-img :class="$i18n.locale == 'en' ? 'flag-active' : 'flag'" src="/flags/us.png" alt="US Flag" /></nuxt-link>
                <nuxt-link class="flag-wrapper" :href="switchLocalePath('pl')" aria-label="Zmień na polski"><nuxt-img :class="$i18n.locale == 'pl' ? 'flag-active' : 'flag'" src="/flags/pl.png" alt="PL Flag" /></nuxt-link>
                <nuxt-link class="flag-wrapper" :href="switchLocalePath('pt')" aria-label="Muda para portugês"><nuxt-img :class="$i18n.locale == 'pt' ? 'flag-active' : 'flag'" src="/flags/pt.png" alt="PT Flag" /></nuxt-link>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
.container {
    position: absolute;

    width: 100%;

    transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
    z-index: 4;
}

// .container-effect {
//     display: none;
//     position: fixed;

//     background-color: $background-color-1;

//     box-shadow: 0px 0px 40px 40px rgba(black, 0.2);

//     animation: navbar-in 700ms forwards;

//     &-hide {
//         animation: navbar-out 500ms forwards !important;
//     }
// }

.inner-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 800px;

    margin: 0 auto;
    padding: 3rem 0;

    opacity: 0.001;
    z-index: 2;

    animation: slide-from-top 1s forwards;
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
    width: 10rem;
    margin: 0;

    font-size: 2rem;
    font-weight: 700;
    text-decoration: none;
    color: white;

    transition: all 200ms cubic-bezier(0.165, 0.84, 0.44, 1);

    @include phone-only {
        margin: 0 auto 1.5rem;

        font-size: 2.5rem;
    }
}

.brand-light {
    color: $blue;
}

.links {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 4rem;

    @include tablet-below {
        justify-content: space-between;
        gap: 0;

        width: 100%;
    }
}

.link {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    border-bottom: 1px solid transparent;

    padding: 0.5rem 0;

    font-size: 1.25rem;
    text-align: center;
    text-decoration: none;
    color: white;

    transition: all 200ms cubic-bezier(0.165, 0.84, 0.44, 1);

    overflow: hidden;

    opacity: 0.6;

    &:hover {
        opacity: 1;
        cursor: pointer;
    }

    &-active {
        @extend .link;

        opacity: 1;
    }

    & .link-text {
        position: relative;
    }

    @include phone-only {
        margin: 0 0.5rem;
        font-size: 1rem;
    }
}

.icon {
    margin-right: 0.75rem;

    @include phone-only {
        height: 16px;
        width: 16px;
    }
}

// @keyframes navbar-out {
//     0% {
//         transform: translateY(0);
//     }

//     100% {
//         transform: translateY(-100px);
//         opacity: 1;
//         background-color: transparent;
//         box-shadow: 0px 0px 40px 40px rgba(black, 0);
//     }
// }

.flags {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;

    width: 10rem;
}

.flag {
    height: 1.25rem;
    width: 2rem;

    border-radius: 3px;

    opacity: 0.3;
    transition: all 200ms cubic-bezier(0.165, 0.84, 0.44, 1);

    &-active {
        @extend .flag;

        opacity: 1;
    }

    &:hover {
        cursor: pointer;
        opacity: 1;
    }
}
</style>

<script setup>
const route = useRoute()

function scrollTo(id) {
    setTimeout(
        () => {
            const ele = document.getElementById(id)
            window.scrollTo(ele.offsetLeft, ele.offsetTop)
        },
        window.location.pathname == "/" ? 0 : 100
    )
}

// function listener() {
//     var nav = document.getElementById("navbar-container")

//     if (window.scrollY > window.innerHeight - 20) {
//         if (!nav.classList.contains("container-effect")) nav.classList.add("container-effect")
//     } else {
//         if (nav.classList.contains("container-effect")) {
//             nav.classList.add("container-effect-hide")
//             setTimeout(() => {
//                 nav.classList.remove("container-effect")
//                 nav.classList.remove("container-effect-hide")
//             }, 200)
//         }
//     }
// }

// onBeforeMount(() => {
//     document.addEventListener("scroll", listener)
// })

// onBeforeUnmount(() => {
//     document.removeEventListener("scroll", listener)
// })
</script>
