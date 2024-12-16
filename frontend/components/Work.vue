<template>
    <article class="work" :style="{ background: `linear-gradient(90deg, ${hexToOpacityRgb(backgroundGradient[0], 0.7)}, ${hexToOpacityRgb(backgroundGradient[1], 0.7)})` }">
        <div class="content">
            <div class="header">
                <div class="logo-row">
                    <NuxtImg :src="`/works/${id}-logo.png`" class="logo" format="webp" :alt="`${id} logo`" />

                    <div class="type type-client" v-if="type == 'client'">
                        <p class="client-label">{{ $t("works.terms.client") }}</p>
                        <WorkClient :external="client.external" :name="client.name" :tag="client.tag" :icon="client.icon" />
                    </div>

                    <div class="type type-startup" v-if="type == 'startup'">Start Up</div>
                </div>
                <div class="tags">
                    <WorkTag v-for="tag of tags" :tag="tag" />
                </div>
            </div>

            <div class="review" v-if="review">
                <div class="review-header">
                    <NuxtImg class="review-image" :src="review.icon" alt="Reviewer profile picture" />
                    <div class="review-header-text">
                        <p class="review-text-name">{{ review.name }}</p>
                        <p class="review-text-tag">{{ review.tag }}</p>
                    </div>
                </div>
                <p class="review-text">"{{ review.text }}"</p>
            </div>

            <div class="buttons">
                <a class="button-visit" :href="website" target="_blank"> {{ $t("works.buttons.visit") }} <NuxtImg class="button-visit-icon" src="/icons/external.svg" alt="External link icon" /> </a>
            </div>
        </div>
        <div class="image-wrapper">
            <div class="image-hover">
                <NuxtImg class="image-hover-icon" src="/icons/enlarge.svg" format="webp" alt="Enlarge Image Button" />
                <NuxtImg :src="`/works/${id}-1.png`" class="image" alt="Work Preview" format="webp" @click="clickImage(`/works/${id}-1.png`)" :placeholder="[2800, 1480, 10]" />
            </div>
        </div>
    </article>
</template>

<style lang="scss" scoped>
.work {
    position: relative;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    height: calc(25rem + 8rem);
    width: 100%;

    padding: 4rem 5rem;

    border-radius: 1.25rem;

    overflow: hidden;

    @include tablet-below {
        flex-direction: column;
        gap: 4rem;

        height: fit-content;

        padding: 2rem;
    }
}

.content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    height: 100%;
    width: calc(100% - 46rem + 20rem - 3rem);

    @include tablet-below {
        gap: 3rem;

        width: 100%;
    }
}

.header {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1.5rem;

    width: 100%;
}

.logo-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
}

.logo {
    width: 20rem;

    @include tablet-below {
        width: 13rem;
    }
}

.type {
    @include tablet-below {
        display: none !important;
    }
}

.type-client {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.5rem;
}

.client-label {
    margin: 0;
    font-size: 0.75rem;
    color: rgba(white, 0.5);
}

.type-startup {
    padding: 0.75rem 2rem;

    border-radius: 5px;

    font-size: 0.75rem;
    text-decoration: none;
    background-color: rgba(white, 0.1);
    color: white;
}

.tags {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.5rem;

    width: 100%;
}

.review {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1rem;
}

.review-header {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
}

.review-image {
    height: 2.5rem;

    border-radius: 10000px;
}

.review-header-text {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.35rem;
}

.review-text-name {
    margin: 0;

    font-size: 0.85rem;
    font-weight: 700;
    color: white;
}

.review-text-tag {
    margin: 0;

    font-size: 0.85rem;
    font-weight: 400;
    color: rgba(white, 0.5);
}

.review-text {
    margin: 0;

    font-size: 0.8rem;
    font-style: italic;
    line-height: 180%;
    color: rgba(white, 0.5);
}

.buttons {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1.5rem;
}

.button-visit {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 0.75rem;

    padding: 0.75rem 2rem;

    border-radius: 5px;

    font-size: 0.85rem;
    text-decoration: none;
    background-color: rgba(white, 0.1);
    color: white;

    transition: 200ms $transition background-color;

    &:hover {
        background-color: rgba(white, 0.13);

        cursor: pointer;
    }

    &-icon {
        height: 0.75rem;

        opacity: 0.5;
    }
}

.image-wrapper {
    position: absolute;
    right: -23rem;
    height: 25rem;

    border-radius: 0.75rem;

    opacity: 0;

    overflow: hidden;

    animation: $animation-duration forwards slide-from-right;
    animation-delay: 200ms;

    @include tablet-below {
        display: none;
    }
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

        border-radius: 0.75rem;

        transition: $transition 400ms background-color;
        pointer-events: none;
    }

    &-icon {
        position: absolute;
        top: 50%;
        left: 30%;

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
        cursor: pointer;

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
}
</style>

<script setup>
const props = defineProps({
    id: String,
    website: String,
    tags: Array,
    type: String,
    client: Object,
    review: Object,
    backgroundGradient: Array,
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

function hexToOpacityRgb(hex, opacity) {
    // Remove the hash at the start if it's there
    hex = hex.replace(/^#/, "")

    // Parse the r, g, b values
    let bigint = parseInt(hex, 16)
    let r = (bigint >> 16) & 255
    let g = (bigint >> 8) & 255
    let b = bigint & 255

    return `rgba(${r}, ${g}, ${b}, 0.7)`
}
</script>
