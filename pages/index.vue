<template>
    <div class="page">
        <div class="text">
            <div class="text-header">
                <h1 class="title">Daniel Ladeira</h1>
                <h1 class="subtitle">Backend/DevOps Developer</h1>

                <div class="buttons">
                    <NuxtLink href="/contact" class="button button-contact">Contact</NuxtLink>
                    <NuxtLink href="/works" class="button button-works">Freelance Work</NuxtLink>
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
    </div>
</template>

<style lang="scss" scoped>
.page {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    margin-top: 10rem;

    @include tablet-below {
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        margin-top: 3rem;
    }
}

.text {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

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

    font-size: 5rem;
    font-weight: 700;
    color: white;

    @include tablet-below {
        font-size: 3.5rem;
        text-align: center;
    }
}

.subtitle {
    margin: 0.5rem 0 0;

    font-size: 2.5rem;
    font-weight: 700;
    color: $blue;

    @include tablet-below {
        font-size: 2rem;
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

.hero-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    background-color: rgba($blue, 0.1);

    border-radius: 3rem;

    padding: 3rem 0 0 1rem;

    height: 29rem;
    width: 29rem;

    overflow: hidden;

    opacity: 0;

    animation: slide-from-right $animation-duration forwards;

    @include tablet-below {
        // display: none;

        height: 70vw;
        width: 70vw;

        margin-top: 4rem;

        animation-name: slide-from-top;
    }
}

.hero {
    width: 100%;
}
</style>
