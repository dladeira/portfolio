<template>
    <div class="page">
        <div class="text">
            <div class="text-header">
                <h1 class="title">Daniel Ladeira</h1>
                <h1 class="subtitle">Backend/DevOps Developer</h1>

                <div class="buttons">
                    <NuxtLink href="/contact" class="button button-contact">Contact</NuxtLink>
                    <NuxtLink href="/freelance" class="button button-works">Freelance Work</NuxtLink>
                </div>
            </div>

            <div class="worked">
                <p class="worked-title">Worked with</p>

                <div class="people">
                    <Client name="SpeedSilver" tag="3.5M subscribers" icon="/people/speedsilver.png" external="https://www.youtube.com/@SpeedSilver" />
                    <Client name="Magic" tag="310K subscribers" icon="/people/magic.png" external="https://www.youtube.com/channel/UC0KMDDerdrOGTaqk3m-kWGw" />
                </div>
            </div>
        </div>
        <NuxtImg class="hero" src="hero.svg" />
    </div>
</template>

<style lang="scss" scoped>
.page {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    margin-top: 5rem;

    @include tablet-below {
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        gap: 2rem;

        margin-top: 2rem;
    }
}

.text {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    margin-bottom: 2rem;

    @include tablet-below {
        align-items: center;
    }
}

.text-header {
    animation: slide-from-top $animation-duration forwards;
    animation-delay: 0s;
    opacity: 0.001;
}

.title {
    margin: 0;

    font-size: 5.5rem;
    font-weight: 700;
    color: white;

    @include laptop-only {
        font-size: 5rem;
    }

    @include tablet-below {
        font-size: 3.5rem;
        text-align: center;
    }
}

.subtitle {
    margin: 0;

    font-size: 2.75rem;
    font-weight: 700;
    color: $blue;

    @include tablet-below {
        font-size: 1.5rem;
        text-align: center;
    }
}

.buttons {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;

    margin-top: 2rem;

    @include tablet-below {
        justify-content: center;
    }
}

.button {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 3rem;
    width: 14rem;

    border-radius: 5px;

    text-decoration: none;

    transition: background-color 200ms $transition;

    &:hover {
        cursor: pointer;
    }

    @include tablet-below {
        width: 12rem;
    }

    &-contact {
        background-color: rgba($blue, 0.1);
        color: $blue;

        &:hover {
            background-color: rgba($blue, 0.15);
        }
    }

    &-works {
        background-color: rgba(white, 0.1);
        color: white;

        &:hover {
            background-color: rgba(white, 0.15);
        }
    }
}

.worked {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1rem;

    margin-top: 4rem;

    animation: slide-from-top $animation-duration forwards;
    animation-delay: 0s;
    opacity: 0.001;

    @include tablet-below {
        margin-top: 2rem;
    }
}

.worked-title {
    margin: 0;
    color: rgba(white, 0.5);
}

.people {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 4rem;
}

.hero {
    animation: slide-from-top $animation-duration forwards;
    animation-delay: 0s;
    opacity: 0.001;

    width: 35%;

    @include tablet-below {
        width: 20rem;
    }
}
</style>
