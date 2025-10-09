<template>
    <nav class="container" id="navbar-container">
        <div class="inner-container">
            <div class="brand">
                <nuxt-link href="/" class="brand">dladeira<span class="brand-light">.com</span></nuxt-link>
            </div>
            <div class="links">
                <nuxt-link href="/about" :class="route.path.includes('/about') ? 'link-active' : 'link'">
                    <NuxtImg class="icon" height="24" width="24" src="/icons/navbar/about.svg" alt="Page icon" />
                    <div class="link-text">About Me</div>
                </nuxt-link>

                <nuxt-link href="/freelance" :class="route.path.includes('/freelance') ? 'link-active' : 'link'">
                    <NuxtImg class="icon" height="24" width="24" src="/icons/navbar/freelance.svg" alt="Page icon" />
                    <div class="link-text">Freelance Work</div>
                </nuxt-link>

                <a href="/resume.pdf" target="_blank" :class="route.path.includes('/resume.pdf') ? 'link-active' : 'link'">
                    <NuxtImg class="icon" height="24" width="24" src="/icons/navbar/resume.svg" alt="Page icon" />
                    <div class="link-text">Resume</div>
                </a>

                <nuxt-link href="/contact" :class="route.path.includes('/contact') ? 'link-active' : 'link'">
                    <NuxtImg class="icon" height="24" width="24" src="/icons/navbar/contact.svg" alt="Page icon" />
                    <div class="link-text">Contact</div>
                </nuxt-link>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
.container {
    position: fixed;

    width: 100%;

    z-index: 4;

    transition: $transition 200ms box-shadow;

    &-effect {
        background-color: rgba($background-color-1, 0.8);

        box-shadow: 0 4px 20px rgba(black, 0.2);
        backdrop-filter: blur(10px);
    }
}

.inner-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 800px;

    margin: 0 auto;
    padding: 1.25rem 0;

    opacity: 0.001;
    z-index: 2;

    animation: slide-from-top 1s forwards;
    animation-delay: 500ms;

    @include resizable-width;

    @include phone-only {
        flex-direction: column;
        justify-content: center;
        gap: 0.75rem;

        width: 90%;

        margin: 0 auto;
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
        width: fit-content;

        margin: 0 auto;

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
        gap: 2.5rem;
    }
}

.link {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 0.65rem;

    border-bottom: 1px solid transparent;

    padding: 0.5rem 0;

    font-size: 1.25rem;
    text-align: center;
    text-decoration: none;
    color: white;

    transition: all 200ms cubic-bezier(0.165, 0.84, 0.44, 1);

    opacity: 0.6;

    &:hover {
        opacity: 1;
        cursor: pointer;
    }

    &-active {
        @extend .link;

        opacity: 1;
    }

    @include phone-only {
        flex-direction: column;

        margin: 0 0.5rem;
        font-size: 1rem;
    }
}

.link-text {
    position: relative;

    @include phone-only {
        font-size: 0.75rem;
    }
}

.icon {
    width: 1.25rem;

    @include phone-only {
        height: 16px;
        width: 16px;
    }
}

.flags {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;

    width: 10rem;

    @include tablet-below {
        display: none;
    }
}

.flag {
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

function listener() {
    var nav = document.getElementById("navbar-container")

    if (window.scrollY > 40) {
        if (!nav.classList.contains("container-effect")) nav.classList.add("container-effect")
    } else {
        if (nav.classList.contains("container-effect")) {
            nav.classList.remove("container-effect")
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
