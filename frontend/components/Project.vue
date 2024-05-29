<template>
    <article class="project">
        <div class="images">
            <nuxt-img :class="'image-2' + (flip ? ' image-front' : '')" :src="img + '-2.png'" format="webp" alt="Project Preview" />
            <nuxt-img class="image-1" :src="img + '-1.png'" format="webp" alt="Project Preview" />
        </div>
        <div class="text">
            <div class="project-header">
                <h4 class="title">{{ title }}</h4>
                <h5 class="subtitle-mobile">{{ subtitle }}</h5>
                <div class="tags">
                    <div class="tag" v-for="tag in tags">{{ tag }}</div>
                </div>
            </div>
            <h5 class="subtitle">{{ subtitle }}</h5>
            <p class="desc">
                {{ desc }}
            </p>

            <div class="buttons">
                <nuxt-link v-if="website" :href="website" class="website" target="_blank">{{ $t("works.button1") }}</nuxt-link>
                <nuxt-link v-if="source" :href="source" class="source" target="_blank">{{ $t("works.button2") }}</nuxt-link>
            </div>
        </div>
    </article>
</template>

<style lang="scss" scoped>
.project {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    margin-bottom: 8rem;

    &:last-child {
        margin-bottom: 0;
    }

    @include phone-only {
        flex-direction: column-reverse;

        margin-bottom: 10rem;
    }
}

$image-width: 30rem;

.images {
    position: relative;

    width: $image-width;

    padding: 2rem 0;

    transform: translate(0, 2rem);

    @include phone-only {
        width: 80%;

        margin: 0 auto;
    }
}

.image-1,
.image-2 {
    position: absolute;

    width: $image-width;

    border-radius: 5px;

    box-shadow: 0 0 16px 0 rgba(black, 0.25);

    @include phone-only {
        width: 100%;
    }
}

.image-1 {
    position: static;
    transform: translate(-2.5rem, -2rem);
}
.image-2 {
    transform: translate(2.5rem, 2rem);
}

.image-front {
    z-index: 100;
}

.text {
    width: 40%;

    @include phone-only {
        width: 100%;
    }

    @include not-phone {
        padding-top: 3rem;
    }
}

.project-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    @include phone-only {
        flex-direction: column;
        justify-content: center;
        align-items: center;

        margin-bottom: 0.5em;
    }
}

.title {
    margin: 00;

    font-size: 2rem;
    font-weight: 700;

    @include phone-only {
        margin: 0;

        font-size: 3rem;
        text-align: center;
    }
}

.tags {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    gap: 0.75rem;

    @include phone-only {
        justify-content: center;
    }
}

.tag {
    padding: 0.65rem 1rem 0.5rem;

    border-radius: 5px;

    font-size: 0.75rem;
    font-weight: 400;
    background-color: rgba(white, 0.2);
    color: white;
}

.subtitle {
    margin: 0.75rem 0 0 0;

    font-size: 1rem;
    font-weight: 400;
    color: $blue;

    @include phone-only {
        display: none;
    }
}

.subtitle-mobile {
    @extend .subtitle;

    margin-bottom: 1.75rem;

    font-size: 1.2rem;

    display: block;

    @include not-phone {
        display: none;
    }
}

.desc {
    margin: 2rem 0 2rem;

    font-size: 1.1rem;
    line-height: 2rem;
    text-indent: 3rem;

    @include phone-only {
        margin-bottom: 0;

        text-align: center;
        text-indent: 0;
    }
}

.buttons {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    gap: 1.25rem;

    @include phone-only {
        justify-content: center;

        margin: 1.5rem 0 0.5rem;
    }
}

.image {
    width: 100%;
}

@mixin button($primary: rgba(white, 0.2), $secondary: rgba(white, 0.5)) {
    padding: 0.75rem 1.75rem;

    border-radius: 5px;

    font-size: 1rem;
    font-weight: 400;
    text-decoration: none;
    background-color: $primary;
    color: white;

    transition: all 200ms cubic-bezier(0.165, 0.84, 0.44, 1);

    &:hover {
        background-color: $secondary;
    }
}

.website {
    @include button(rgba($blue, 0.4), rgba($blue, 1));
}

.source {
    @include button;
}
</style>

<script setup>
const props = defineProps({
    title: String,
    subtitle: String,
    img: String,
    tags: Array,
    website: String,
    source: String,
    desc: String,
    flip: Boolean,
});
</script>
