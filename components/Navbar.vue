<template>
    <div class="container">
        <div class="wrapper">
            <div class="links">
                <a class="link" @click="scrollTo('skills')" >{{ $t("navbar1") }}</a>
                <a class="link" @click="scrollTo('showcase')">{{ $t("navbar2") }}</a>
                <a class="link" @click="scrollTo('contact')">{{ $t("navbar3") }}</a>
            </div>
            <div class="languages">
                <nuxt-link :to="switchLocalePath('en')" aria-label="Switch language to English">
                    <nuxt-img class="language" src="/images/flag-us.png" height="30" width="45"
                        :placeholder="[45, 30, 10]" format="webp" alt="Flag US" />
                </nuxt-link>

                <nuxt-link :to="switchLocalePath('pl')" aria-label="Switch language to Polish">
                    <nuxt-img class="language" src="/images/flag-pl.png" height="30" width="45"
                        :placeholder="[45, 30, 10]" format="webp" alt="Flag PL" />
                </nuxt-link>

                <nuxt-link :to="switchLocalePath('pt')" aria-label="Switch language to Portuguese" >
                    <nuxt-img class="language" src="/images/flag-pt.png" height="30" width="45"
                        :placeholder="[45, 30, 10]" format="webp" alt="Flag PT" />
                </nuxt-link>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.container {
    position: fixed;
    top: 0;

    height: 60px;
    width: 100%;

    background-color: #0E2C48;

    transition: background-color 300ms cubic-bezier(.22, .61, .36, 1);

    z-index: 15;

    &:hover {
        background-color: #103455;
    }

    @include tablet-only {
        height: fit-content;
    }
}

.wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    height: 100%;
    width: 80%;
    max-width: $max-width;

    margin: 0 auto;

    @include tablet-only {
        flex-direction: column;

        margin-bottom: 5px;
    }
}

.links,
.languages {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.languages {
    @include tablet-only {
        margin-top: 5px;
    }
}

.link {
    margin-right: 40px;
    padding: 10px;

    text-decoration: none;
    color: white;

    transition: transform 300ms cubic-bezier(.22, .61, .36, 1);

    &:hover {
        transform: scale(1.2);

        cursor: pointer;
    }

    @include tablet-only {
        margin: 0 10px;
    }
}

.language {
    height: 30px;
    width: 45px;

    margin-left: 30px;

    border-radius: 6px;

    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
    background-color: white;

    overflow: hidden;

    transition: transform 300ms cubic-bezier(.22, .61, .36, 1);

    &:hover {
        transform: scale(1.2);
        cursor: pointer;
    }

    @include tablet-only {
        margin: 0 10px;
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