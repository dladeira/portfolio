<template>
    <div class="container">
        <div class="content">
            <div class="copy">© 2023 Daniel Ladeira</div>
            <div class="icons">
                <nuxt-link class="icon-wrapper" href="https://dribbble.com/dladeira"><nuxt-img src="/icon-dribbble.svg" class="icon" alt="Dribbble icon" /></nuxt-link>
                <nuxt-link class="icon-wrapper" href="https://stackoverflow.com/users/9564834/daniel"><nuxt-img src="/icon-so.svg" class="icon" alt="StackOverflow icon" /></nuxt-link>
                <nuxt-link class="icon-wrapper" href="https://github.com/dladeira"><nuxt-img src="/icon-gh.svg" class="icon" alt="Github icon" /></nuxt-link>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    width: 100%;

    padding: 1.5rem 0;

    background-color: rgba(#101318, 30%);
}

.content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @include desktop-only {
        width: $content-desktop;
    }

    @include laptop-only {
        width: $content-laptop;
    }

    margin: 0 auto;
}

.copy {
    color: $gray;
}

.icon {
    height: 20px;
    width: 20px;


    filter: invert(60%);

    &:hover {
        filter: invert(90%);
    }

    &-wrapper {
        margin-left: 1rem;
    }
}
</style>