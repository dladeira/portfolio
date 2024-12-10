<template>
    <div class="container">
        <div class="content">
            <div class="left">
                <div class="copyright">© 2024 Daniel Ladeira</div>
            </div>
            <!-- <div class="icons">
                <nuxt-img src="/icons/github.svg" class="icon icon-github" />
                <nuxt-img src="/icons/dribbble.svg" class="icon icon-dribbble" />
                <nuxt-img src="/icons/discord.svg" class="icon icon-discord" />
                <nuxt-img src="/icons/overflow.svg" class="icon icon-overflow" />
                <nuxt-img src="/icons/linkedin.svg" class="icon icon-linkedin" />
            </div> -->
            <div class="flags">
                <nuxt-link class="flag-wrapper" :href="switchLocalePath('en')" aria-label="Switch to English"><nuxt-img :class="$i18n.locale == 'en' ? 'flag-active' : 'flag'" src="/flags/us.png" alt="US Flag" /></nuxt-link>
                <nuxt-link class="flag-wrapper" :href="switchLocalePath('pl')" aria-label="Zmień na polski"><nuxt-img :class="$i18n.locale == 'pl' ? 'flag-active' : 'flag'" src="/flags/pl.png" alt="PL Flag" /></nuxt-link>
                <nuxt-link class="flag-wrapper" :href="switchLocalePath('pt')" aria-label="Muda para portugês"><nuxt-img :class="$i18n.locale == 'pt' ? 'flag-active' : 'flag'" src="/flags/pt.png" alt="PT Flag" /></nuxt-link>
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
}

.icon {
    opacity: 0.5;

    &:hover {
        cursor: pointer;
        opacity: 1;
    }
}

.flags {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
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
