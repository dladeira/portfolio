<template>
    <div class="container">
        <div class="content">
            <div class="left">
                <div class="copyright">© 2024 Daniel Ladeira</div>
            </div>
            <div class="icons">
                <a class="icon-wrapper" href="https://github.com/dladeira">
                    <NuxtImg src="/icons/github.svg" class="icon icon-github" height="20" width="20" alt="Github logo" />
                </a>
                <a class="icon-wrapper" href="https://dribbble.com/dladeira">
                    <NuxtImg src="/icons/dribbble.svg" class="icon icon-dribbble" height="20" width="20" alt="Dribbble logo" />
                </a>
                <div class="icon-wrapper">
                    <NuxtImg src="/icons/discord.svg" class="icon icon-discord" height="20" width="20" alt="Discord logo" />
                </div>
                <a class="icon-wrapper" href="https://stackoverflow.com/users/9564834/daniel">
                    <NuxtImg src="/icons/overflow.svg" class="icon icon-overflow" height="20" width="20" alt="Stack overflow logo" />
                </a>
                <a class="icon-wrapper" href="https://linkedin.com/in/dladeira">
                    <NuxtImg src="/icons/linkedin.svg" class="icon icon-linkedin" height="20" width="20" alt="Linkedin logo" />
                </a>
            </div>
            <div class="flags">
                <nuxt-link class="flag-wrapper" :href="$switchLocalePath('en')" aria-label="Switch to English"><NuxtImg :class="$i18n.locale == 'en' ? 'flag-active' : 'flag'" src="/flags/us.png" alt="US Flag" /></nuxt-link>
                <nuxt-link class="flag-wrapper" :href="$switchLocalePath('pl')" aria-label="Zmień na polski"><NuxtImg :class="$i18n.locale == 'pl' ? 'flag-active' : 'flag'" src="/flags/pl.png" alt="PL Flag" /></nuxt-link>
                <nuxt-link class="flag-wrapper" :href="$switchLocalePath('pt')" aria-label="Muda para portugês"><NuxtImg :class="$i18n.locale == 'pt' ? 'flag-active' : 'flag'" src="/flags/pt.png" alt="PT Flag" /></nuxt-link>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    position: absolute;
    bottom: 0;
    width: 100%;

    padding: 1rem 0;

    animation: fade-in 1s forwards;
    animation-delay: 700ms;
    opacity: 0.001;
}

.content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin: 0 auto;

    @include resizable-width;
}

.left {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 1.5rem;
}

.copyright {
    font-size: 1rem;
    color: rgba(white, 0.5);
}

.icons {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 0.75rem;

    @include tablet-below {
        display: none;
    }
}

.icon-wrapper {
    margin: 0;

    line-height: 0;
}

.icon {
    opacity: 0.5;

    transition: all 200ms $transition;

    &:hover {
        cursor: pointer;
        opacity: 1;
    }

    &-discord:hover {
        cursor: default;
    }
}

.flags {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    @include above-tablet {
        display: none;
    }
}

.flag {
    height: 1.25rem;
    width: 2rem;

    border-radius: 3px;

    opacity: 0.3;
    transition: all 200ms $transition;

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
