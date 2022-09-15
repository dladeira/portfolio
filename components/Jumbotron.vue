<template>
    <div class="container">
        <div class="content">
            <div class="text">
                <p class="name">Daniel Ladeira</p>
                <h1 class="title">{{ $t("title1") }}<br />{{ $t("title2") }}</h1>
                <h2 class="subtitle">{{ $t("subtitle1") }}<br />{{ $t("subtitle2") }}</h2>
            </div>
            <div class="buttons">
                <a class="contact" @click="scrollTo('contact')">{{ $t("button1") }}</a>
                <a class="info" @click="scrollTo('skills')">{{ $t("button2") }}</a>
            </div>
        </div>
        <nuxt-img class="profile" src="/images/profile-1.jpg" sizes="sm:200px md:400px lg:800px" alt="Me" height="2612"
            width="2612" quality="75" format="webp" placeholder="[100, 100, 15]" />
    </div>
</template>

<style lang="scss" scoped>
@keyframes fadeIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@keyframes slideIn {
    0% {
        transform: translateX(-50%);
        opacity: 0;
    }

    100% {
        transform: translateX(0%);
        opacity: 1;
    }
}

.container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    height: 100vh;

    padding-top: 150px;
    padding-bottom: 200px;

    @include tablet-only {
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;

        padding-top: 50px;
        padding-bottom: 0;
    }
}

.content {
    width: fit-content;
}

.text {
    width: fit-content;

    animation: 1s ease-out 0s 1 fadeIn;
}

.name {
    width: fit-content;

    margin: 0;

    font-weight: 700;
    font-size: 2.25rem;
    color: $secondary;

    transition: transform 300ms cubic-bezier(.22, .61, .36, 1);

    &:hover {
        transform: scale(1.1);

        cursor: default;
    }

    @include tablet-only {
        font-size: 2rem;
    }
}

.title {
    width: fit-content;

    margin: 10px 0;

    font-weight: 700;
    font-size: 4rem;
    color: $primary;

    transition: transform 300ms cubic-bezier(.22, .61, .36, 1);

    &:hover {
        transform: scale(1.1);

        cursor: default;
    }

    @include tablet-only {
        font-size: 2.25rem;
    }
}

.subtitle {
    width: fit-content;

    margin: 0;

    font-weight: 400;
    font-size: 2.25rem;
    color: $tertiary;

    transition: transform 300ms cubic-bezier(.22, .61, .36, 1);

    &:hover {
        transform: scale(1.1);

        cursor: default;
    }

    @include tablet-only {
        font-size: 1.5rem;
    }
}

.buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;

    height: 60px;

    margin-top: 30px;

    animation: 1s cubic-bezier(.22, .61, .36, 1) 0s 1 slideIn;

    @include tablet-only {
        height: 45px;

        margin-top: 20px;
    }
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

    transition: transform 300ms cubic-bezier(.22, .61, .36, 1), background-color 400ms cubic-bezier(.22, .61, .36, 1);

    &:hover {
        background-color: white;

        transform: scale(1.1);
        cursor: pointer;
    }

    @include tablet-only {
        font-size: 1rem;
    }
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
    height: 400px;
    width: 400px;

    border: 8px solid $primary;
    border-radius: 100%;

    animation: 1s ease-out 0s 1 fadeIn;

    transition: transform 300ms cubic-bezier(.22, .61, .36, 1);

    &:hover {
        transform: scale(1.1);

        cursor: default;
    }
    
    @include tablet-only {
        height: 300px;
        width: 300px;
    }
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