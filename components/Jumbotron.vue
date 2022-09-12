<template>
    <div class="container">
        <div class="text">
            <p class="name">Daniel Ladeira</p>
            <h1 class="title">{{ $t("title1") }}<br />{{ $t("title2") }}</h1>
            <h2 class="subtitle">{{ $t("subtitle1") }}<br />{{ $t("subtitle2") }}</h2>
            <div class="buttons">
                <a class="contact" @click="scrollTo('contact')">{{ $t("button1") }}</a>
                <a class="info" @click="scrollTo('skills')">{{ $t("button2") }}</a>
            </div>
        </div>
        <nuxt-img class="profile" src="/images/profile-1.jpg" height="400" width="400" quality="100" />
    </div>
</template>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-top: 150px;
    margin-bottom: 500px;
}

.text {
    width: fit-content;
}

.name {
    width: fit-content;

    margin: 0;

    font-weight: 700;
    font-size: 2.25rem;
    color: $secondary;
}

.title {
    width: fit-content;

    margin: 10px 0;

    font-weight: 700;
    font-size: 4rem;
    color: $primary;
}

.subtitle {
    width: fit-content;

    margin: 0;

    font-weight: 400;
    font-size: 2.25rem;
    color: $tertiary;
}

.buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;

    height: 60px;

    margin-top: 30px;
}

.button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    border: 2px solid white;
    border-radius: 10px;

    font-size: 1.5rem;
    text-decoration: none;
    background-color: transparent;
    color: white;

    &:hover {
        background-color: white;

        cursor: pointer;
    }

    transition: background-color 400ms cubic-bezier(.22, .61, .36, 1);
}

.contact {
    @extend .button;

    width: 50%;

    border-color: $secondary;

    &:hover {
        background-color: $secondary;
    }
}

.info {
    @extend .button;

    width: 40%;

    &:hover {
        color: black;
    }
}

.profile {
    border: 8px solid $primary;
    border-radius: 100%;
}
</style>

<script>
export default {
    methods: {
        scrollTo(id) {
            if (process.browser) {
                document.getElementById(id).scrollIntoView()
            }
        }
    }
}
</script>