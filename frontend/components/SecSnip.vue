<template>
    <div class="container">
        <div class="inner-container">
            <nuxt-img class="hero" src="/hero.png" />

            <div class="socials left">
                <nuxt-link class="icon-wrapper" href="mailto: daniel@ladeira.eu"><nuxt-img src="/icon-mail.svg" class="icon" /></nuxt-link>
                <nuxt-link class="icon-wrapper" href="https://stackoverflow.com/users/9564834/daniel"><nuxt-img src="/icon-so.svg" class="icon" /></nuxt-link>
                <nuxt-link class="icon-wrapper" href="https://github.com/dladeira"><nuxt-img src="/icon-gh.svg" class="icon" /></nuxt-link>
                <div class="line" />
            </div>
            <div class="socials right">
                <nuxt-link class="email" href="mailto: daniel@ladeira.eu">daniel@ladeira.eu</nuxt-link>
                <div class="line" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container,
.inner-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    height: 25vh;

    overflow: hidden;
}

.container {
    background-image: $gradient-main;
}

.inner-container {
    position: relative;

    width: 1150px;
    max-width: 80%;
}

.text {
    position: relative;

    width: 100%;

    margin-top: 180px;
}

.title,
.subtitle {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    font-weight: 900;
    color: white;
}

.subtitle {
    position: absolute;
    top: 170px;
    align-items: flex-start;

    width: 100%;

    color: #9FCFF1;
}

.title1 {
    font-size: 10rem;
}

.title2 {
    font-size: 8rem;
}

.subtitle1 {
    font-size: 6rem;
}

.subtitle2 {
    font-size: 4rem;
}

.hero {
    width: 200px;

    transform: translate(5px, 110px);

}

.buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    position: absolute;
    bottom: 9rem;
}

.button {
    padding: 14px 48px;

    font-size: 2.25rem;
    font-weight: 400;
    text-decoration: none;
    background-color: $gray;
    color: white;

    box-shadow: 8px 8px 0 0 rgba(black, 0.75);

    &:hover {
        box-shadow: none;

        box-shadow: 4px 4px 0 0 rgba(black, 0.75);
        transform: translate(4px, 4px);
    }
}

.contact {
    margin-right: 2.5rem;
    background-color: $blue;
}

.socials {
    position: absolute;
    bottom: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.left {
    left: 0;
}

.right {
    right: 0;
}

.icon {
    height: 20px;
    width: 20px;

    filter: invert(100%);

    &:hover {
        filter: invert(80%);
    }

    &-wrapper {
        margin-bottom: 1rem;
    }
}

.email {

    margin-bottom: 1rem;

    text-decoration: none;
    text-orientation: sideways;
    writing-mode: vertical-rl;
    color: white;

    &:hover {
        color: darken(white, 10);
    }
}

.line {
    height: 25px;
    width: 2px;

    background-color: white;
}
</style>