<template>
    <nav class="container" id="navbar-container">
        <div class="inner-container">
            <div class="brand">
                <nuxt-link :href="localePath('/')" class="brand">Ladeira<span class="brand-light">.eu</span></nuxt-link>
            </div>
            <div class="links">
                <nuxt-link :href="localePath('/')" @click="scrollTo('about')" class="link">
                    <nuxt-img class="icon" src="/icon-user.svg" />
                    <div class="link-text">{{ $t("navbar.link1") }}</div>
                </nuxt-link>
                <nuxt-link :href="localePath('/')" @click="scrollTo('works')" class="link">
                    <nuxt-img class="icon" src="/icon-resume.svg" />
                    <div class="link-text">{{ $t("navbar.link2") }}</div>
                </nuxt-link>
                <nuxt-link :href="localePath('/')" @click="scrollTo('contact')" class="link">
                    <nuxt-img class="icon" src="/icon-contact.svg" />
                    <div class="link-text">{{ $t("navbar.link3") }}</div>
                </nuxt-link>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
.container {
    position: absolute;

    width: 100%;

    backdrop-filter: blur(5px);
    transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
    z-index: 4;

    @include phone-only {
        backdrop-filter: none;
    }
}

.container-effect {
    position: fixed;
    background-color: rgba(black, 0.3);
    box-shadow: 0px 0px 40px 40px rgba(black, 0.2);

    @include phone-only {
        background-color: rgba(black, 0.5);
        box-shadow: none;
    }

    animation: navbar-in 500ms forwards;

    &-hide {
        animation: navbar-out 500ms forwards !important;
    }
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
    gap: 3rem;
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

    & .link-text {
        position: relative;
    }

    &:hover .link-text::before {
        position: absolute;
        bottom: -2px;

        height: 1px;

        border-radius: 100px;

        background-color: white;

        content: "";

        animation: slide-in ease-out 300ms forwards;
    }

    & .link-text::before {
        position: absolute;
        bottom: -2px;

        height: 1px;
        // width: 100%;

        border-radius: 100px;

        background-color: white;

        content: "";

        animation: slide-out ease-out 300ms forwards;
    }

    @keyframes slide-in {
        from {
            width: 0%;
        }
        to {
            width: 100%;
        }
    }

    @keyframes slide-out {
        from {
            left: 0;
            width: 100%;
        }
        to {
            left: 100%;
            width: 0%;
        }
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

@keyframes navbar-in {
    0% {
        transform: translateY(-100px);
    }

    100% {
        transform: translateY(0);
        opacity: 1;
    }
}

@keyframes navbar-out {
    0% {
        transform: translateY(0);
    }

    100% {
        transform: translateY(-100px);
        opacity: 1;
        background-color: transparent;
        box-shadow: 0px 0px 40px 40px rgba(black, 0);
    }
}
</style>

<script setup>
function scrollTo(id) {
    setTimeout(
        () => {
            const ele = document.getElementById(id)
            window.scrollTo(ele.offsetLeft, ele.offsetTop)
        },
        window.location.pathname == "/" ? 0 : 100
    )
}

function listener() {
    var nav = document.getElementById("navbar-container")

    if (window.scrollY > window.innerHeight - 20) {
        if (!nav.classList.contains("container-effect")) nav.classList.add("container-effect")
    } else {
        if (nav.classList.contains("container-effect")) {
            nav.classList.add("container-effect-hide")
            setTimeout(() => {
                nav.classList.remove("container-effect")
                nav.classList.remove("container-effect-hide")
            }, 200)
        }
    }
}

onBeforeMount(() => {
    document.addEventListener("scroll", listener)
})

onBeforeUnmount(() => {
    document.removeEventListener("scroll", listener)
})
</script>
