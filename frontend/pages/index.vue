<template>
    <div class="page">
        <div class="text">
            <h1 class="title">{{ $t("hero.title") }}</h1>
            <h1 class="subtitle">{{ $t("hero.subtitle") }}</h1>

            <div class="buttons">
                <a href="/works" class="button button-works">Works</a>
                <a href="/contact" class="button button-contact">Contact</a>
            </div>

            <div class="worked">
                <p class="worked-title">Worked with</p>

                <div class="people">
                    <div class="person">
                        <nuxt-img class="person-image" src="/people/speedsilver.png" />
                        <div class="person-text">
                            <a href="https://www.youtube.com/@SpeedSilver" target="_blank" class="person-title">
                                <p class="person-name">SpeedSilver</p>
                                <nuxt-img src="/icons/external.svg" class="person-external" />
                            </a>
                            <p class="person-stat">3.5M subscribers</p>
                        </div>
                    </div>

                    <div class="person">
                        <nuxt-img class="person-image" src="/people/magic.png" />
                        <div class="person-text">
                            <a href="https://www.youtube.com/channel/UC0KMDDerdrOGTaqk3m-kWGw" target="_blank" class="person-title">
                                <p class="person-name">Magic</p>
                                <nuxt-img src="/icons/external.svg" class="person-external" />
                            </a>
                            <p class="person-stat">310K subscribers</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <nuxt-img src="/hero-frame.png" class="hero" :style="{ opacity: 0 }" />
    </div>
</template>

<style lang="scss" scoped>
.page {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    margin-top: 7rem;
}

.title {
    margin: 0;

    font-size: 5rem;
    font-weight: 700;
    color: white;
}

.subtitle {
    margin: 0.5rem 0 0;

    font-size: 2.5rem;
    font-weight: 700;
    color: $blue;
}

.buttons {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;

    margin-top: 2rem;
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

    &-works {
        background-color: rgba($blue, 0.1);
        color: $blue;

        &:hover {
            background-color: rgba($blue, 0.15);
        }
    }

    &-contact {
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

.person {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
}

.person-image {
    height: 3rem;

    border-radius: 1000px;
}

.person-text {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.25rem;
}

.person-title {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 0.75rem;

    text-decoration: none;

    font-weight: 400;
    color: white;
}

.person-name {
    margin: 0;
}

.person-stat {
    margin: 0;

    font-size: 0.85rem;
    color: rgba(white, 0.5);
}

.person-external {
    opacity: 0.2;

    transition: opacity 200ms $transition;

    &:hover {
        opacity: 1;
        cursor: pointer;
    }
}
</style>
