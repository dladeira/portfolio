<template>
    <article class="work" :style="{ background: `linear-gradient(90deg, ${hexToOpacityRgb(backgroundGradient[0], 0.7)}, ${hexToOpacityRgb(backgroundGradient[1], 0.7)})` }">
        <div class="content">
            <div class="header">
                <div class="logo-row">
                    <nuxt-img :src="`/works/${id}-logo.png`" class="logo" />

                    <div class="client-container" v-if="type == 'client'">
                        <p class="client-label">Client</p>
                        <WorkClient :external="client.external" :name="client.name" :tag="client.tag" :icon="client.icon" />
                    </div>

                    <div class="startup-type" v-if="type == 'startup'">Start Up</div>
                </div>
                <div class="tags">
                    <WorkTag v-for="tag of tags" :tag="tag" />
                </div>
            </div>

            <div class="review" v-if="review">
                <div class="review-header">
                    <nuxt-img class="review-image" :src="review.icon" />
                    <div class="review-header-text">
                        <p class="review-text-name">{{ review.name }}</p>
                        <p class="review-text-tag">{{ review.tag }}</p>
                    </div>
                </div>
                <p class="review-text">"{{ review.text }}""</p>
            </div>

            <div class="buttons">
                <a class="button-visit" :href="website" target="_blank"> Visit Website <nuxt-img class="button-visit-icon" src="/icons/external.svg" /> </a>
            </div>
        </div>

        <nuxt-img :src="`/works/${id}-1.png`" class="image" />
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
}

.content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    height: 100%;
    width: calc(100% - 46rem + 20rem - 3rem);
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

.client-container {
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

.startup-type {
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

.image {
    position: absolute;
    right: -23rem;
    height: 25rem;

    border-radius: 0.5rem;

    opacity: 0;

    animation: 1s forwards slide-from-right;
    animation-delay: 200ms;
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
