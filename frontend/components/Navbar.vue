<template>
    <nav class="container" id="navbar-container">
        <div class="inner-container">
            <div class="brand">
                <nuxt-link :href="localePath('/')" class="brand">Ladeira<span class="brand-light">.eu</span></nuxt-link>
            </div>
            <div class="languages">
                <nuxt-link :class="$i18n.locale == 'en' ? 'language-active' : 'language'" :href="switchLocalePath('en')" aria-label="Switch to English">
                    <nuxt-img class="language-flag" src="/flag-us.png" alt="US Flag" />
                    <div class="language-text">English</div>
                </nuxt-link>
                <nuxt-link :class="$i18n.locale == 'pl' ? 'language-active' : 'language'" :href="switchLocalePath('pl')" aria-label="Zmień na polski">
                    <nuxt-img class="language-flag" src="/flag-pl.png" alt="PL Flag" />
                    <div class="language-text">Polish</div>
                </nuxt-link>
                <nuxt-link :class="$i18n.locale == 'pt' ? 'language-active' : 'language'" :href="switchLocalePath('pt')" aria-label="Muda para portugês">
                    <nuxt-img class="language-flag" src="/flag-pt.png" alt="PT Flag" />
                    <div class="language-text">Portuguese</div>
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

    width: 100%;

    padding: 30px 10% 0 calc($block-left + $block-width + $block-margin);

    opacity: 0;
    z-index: 2;

    animation: navbar-in 1s forwards;
    animation-delay: 500ms;

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

.languages {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 3rem;
}

.language {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;

    text-decoration: none;

    transition: all 200ms cubic-bezier(0.165, 0.84, 0.44, 1);
    opacity: 0.3;

    &-active,
    &:hover {
        @extend .language;
        opacity: 1;
    }
}

.language-text {
    font-size: 1.25rem;
    font-weight: 700;
    text-decoration: none;
    color: white;
}

.language-flag {
    height: 1.7rem;
    aspect-ratio: 1.7;

    border-radius: 5px;

    &:hover {
        cursor: pointer;
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
            const ele = document.getElementById(id);
            window.scrollTo(ele.offsetLeft, ele.offsetTop);
        },
        window.location.pathname == "/" ? 0 : 100
    );
}

function listener() {
    var nav = document.getElementById("navbar-container");

    if (window.scrollY > window.innerHeight - 20) {
        if (!nav.classList.contains("container-effect")) nav.classList.add("container-effect");
    } else {
        if (nav.classList.contains("container-effect")) {
            nav.classList.add("container-effect-hide");
            setTimeout(() => {
                nav.classList.remove("container-effect");
                nav.classList.remove("container-effect-hide");
            }, 200);
        }
    }
}

onBeforeMount(() => {
    document.addEventListener("scroll", listener);
});

onBeforeUnmount(() => {
    document.removeEventListener("scroll", listener);
});
</script>
