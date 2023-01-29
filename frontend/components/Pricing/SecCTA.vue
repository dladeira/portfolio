<template>
    <div class="container">
        <div class="subtitle">Have an plan?</div>
        <div class="title">Lets Get In Touch</div>
        <div class="buttons">
            <nuxt-link to="/contact" class="button contact">Contact me</nuxt-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    padding: 6rem 0;

    background-color: white;
}

.subtitle {
    margin-bottom: 1.25rem;

    font-size: 2rem;
    font-weight: 400;
}

.title {
    margin-bottom: 2rem;

    font-size: 3rem;
    font-weight: 700;
}

.buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.button {
    padding: 1rem 3rem;

    font-size: 1.75rem;
    font-weight: 400;
    text-decoration: none;
    background-color: $gray;
    color: white;

    &:hover {
        background-color: darken($gray, 5);
    }
}

.contact {
    margin-right: 2rem;

    background-color: $blue;

    &:hover {
        background-color: darken($blue, 5);
    }
}
</style>