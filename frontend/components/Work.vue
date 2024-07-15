<template>
    <article class="project">
        <div class="text">
            <div class="project-header-outer">
                <div class="project-header">
                    <h4 class="title">{{ $t(`works.list.${id}.title`) }}</h4>
                    <h5 :class="'type type-' + type">{{ $t("works.type." + type) }}</h5>
                </div>
                <div class="duration">{{ $t(`works.list.${id}.duration`) }}</div>
            </div>

            <p class="desc">{{ $t(`works.list.${id}.desc`) }}</p>

            <div class="tags">
                <div class="tag" v-for="tag in tags">{{ tag }}</div>
            </div>

            <div class="buttons">
                <nuxt-link v-if="website" :href="website" class="link link-website" target="_blank">{{ $t("works.website") }} <nuxt-img src="/icons/view-website.svg" class="link-website-icon" alt="Visit Website Icon" /> </nuxt-link>
                <nuxt-link v-if="case" :href="`/case-studies/${id}`" class="link link-case">{{ $t("works.case") }}</nuxt-link>
            </div>
        </div>
        <div class="images">
            <div class="image-1">
                <div class="image-hover">
                    <nuxt-img class="image-hover-icon" src="/icons/enlarge.svg" format="webp" alt="Enlarge Image Button" />
                    <nuxt-img class="image" :src="`/works/${id}-2.png`" format="webp" alt="Project Preview" @click="clickImage(`/works/${id}-2.png`)" />
                </div>
            </div>
            <div class="image-2">
                <div class="image-hover">
                    <nuxt-img class="image-hover-icon" src="/icons/enlarge.svg" format="webp" alt="Enlarge Image Button" />
                    <nuxt-img class="image" :src="`/works/${id}-1.png`" format="webp" alt="Project Preview" @click="clickImage(`/works/${id}-1.png`)" />
                </div>
            </div>
        </div>
    </article>
</template>

<style lang="scss" scoped>
.project {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;

    width: 100%;

    &:last-child {
        margin-bottom: 0;
    }

    @include tablet-below {
        flex-direction: column;
        gap: 2rem;
    }
}

.text {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1.5rem;

    width: 40%;

    @include tablet-below {
        width: 100%;

        align-items: center;
    }
}

.project-header-outer {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.25rem;

    width: 100%;
}

.project-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
}

.title {
    margin: 00;

    font-size: 2.25rem;
    font-weight: 700;
}

.type {
    margin: 0;
    padding: 0.75rem 1.25rem;

    border-radius: 5px;

    font-size: 0.75rem;
    font-weight: 400;

    &-startup {
        background-color: rgba($green, 0.2);
        color: $green;
    }

    &-client {
        background-color: rgba($blue, 0.2);
        color: $blue;
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
    border-radius: 5px;

    padding: 0.75rem 1.5rem;

    font-size: 0.75rem;
    font-weight: 400;
    background-color: rgba(white, 0.1);
    color: white;
}

.duration {
    margin: 0;

    font-size: 1rem;
    font-weight: 400;
    color: $blue;

    @include phone-only {
        display: none;
    }
}

.desc {
    flex-grow: 1;

    margin: 0;

    line-height: 180%;
    font-size: 1rem;
    font-weight: 400;
    color: white;

    @include tablet-below {
        text-align: center;
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

$border-expand: 2px;

.link {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-bottom: $border-expand;
    padding-bottom: 0.25rem;

    border-bottom: 1px solid white;

    color: white;
    text-decoration: none;
    font-size: 1rem;

    &:hover {
        margin-bottom: 0;

        border-bottom: calc($border-expand + 1px) solid white;
    }
}

.link-website {
    border-color: $blue !important;

    &:hover &-icon {
        transform: translate(0.25rem, -0.25rem);
    }

    &-icon {
        height: 0.55rem;

        margin-left: 0.5rem;

        transition: 200ms $transition all;
    }
}

.link-case {
    border-color: $green !important;
}

// ==========
// IMAGES
// ==========

.images {
    position: relative;

    width: 35%;

    padding: 2rem 0;

    @include phone-only {
        width: 80%;

        margin: 0 auto;
    }
}

.image-1,
.image-2 {
    position: absolute;

    width: 100%;

    border-radius: 10px;

    box-shadow: 0 0 16px 0 rgba(black, 0.25);

    overflow: hidden;
    line-height: 0;

    &:hover {
        cursor: pointer;
    }

    @include laptop-only {
        width: 30rem;
    }

    @include small-laptop-only {
        width: 25rem;
    }

    @include phone-only {
        width: 100%;
    }
}

.image-1 {
    transform: translate(2.5rem, 2rem);
}

.image-2 {
    position: static;
    transform: translate(-2.5rem, -2rem);
}

.image-hover {
    position: relative;

    height: 100%;
    width: 100%;

    &::after {
        position: absolute;
        top: 0;
        left: 0;

        height: 100%;
        width: 100%;

        content: "";

        transition: $transition 400ms background-color;
        pointer-events: none;
    }

    &-icon {
        position: absolute;
        top: 50%;
        left: 50%;

        height: 2rem;
        width: 2rem;

        transform: translate(-50%, -50%);

        filter: invert(1);

        opacity: 0;
        transition: $transition 400ms opacity;
        pointer-events: none;
        z-index: 10;
    }

    &:hover {
        & .image-hover-icon {
            opacity: 1;
        }

        &::after {
            background-color: rgba(black, 0.4);
            backdrop-filter: blur(3px);
        }
    }
}

.image {
    height: 100%;
    width: 100%;
}
</style>

<script setup>
const props = defineProps({
    id: String,
    type: String,
    tags: Array,
    website: String,
    case: Boolean,
})

const popupOpen = useState("popup-image-open")
const popupImage = useState("popup-image-image")

function clickImage(src) {
    var img = new Image()
    img.onload = () => {
        setTimeout(() => {
            popupOpen.value = true
        }, 10)
        popupImage.value = src
    }
    img.src = src
}
</script>
