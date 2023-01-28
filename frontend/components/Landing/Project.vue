<template>
    <div class="project">
        <nuxt-img class="image" :src="img" />
        <div class="name">{{ name }}</div>
        <div class="tags">
            <div class="tag" v-for="tag in tags">{{ tag }}</div>
        </div>
        <div class="desc">
            {{ desc }}
        </div>
        <div class="buttons">
            <nuxt-link :href="website ? website : ''" :class="website ? 'website' : 'website-disabled'">Live Website</nuxt-link>
            <nuxt-link :href="source ? source : ''" :class="source ? 'source' : 'source-disabled'">Source Code</nuxt-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.project {
    width: 31%;

    padding: 30px 30px;

    border-radius: 10px;

    background-color: white;

    box-shadow: 0 0 4px 0 rgba(black, 0.25);
}

.name {
    margin: 10px 0;

    font-size: 2rem;
    font-weight: 700;
}

.tags {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    margin-bottom: 10px;
}

.tag {
    margin-right: 1rem;
    padding: 2px 8px;

    font-size: 1rem;
    font-weight: 400;
    background-color: black;
    color: white;
}

.desc {
    height: 9rem;

    line-height: 1.4rem;
}

.image {
    width: 100%;
}

.buttons {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    margin-top: 2rem;
}

.website {
    margin-right: 1rem;
    padding: 6px 10px;

    border: 2px solid $green;

    font-size: 1rem;
    font-weight: 400;
    text-decoration: none;
    color: black;

    transition: all 200ms cubic-bezier(0.165, 0.84, 0.44, 1);

    &:hover {
        background-color: $green;
        color: white;
    }

    &-disabled {
        margin-right: 1rem;
        padding: 6px 10px;

        border: 2px solid lighten($green, 40);

        font-size: 1rem;
        font-weight: 400;
        text-decoration: none;
        color: lighten(black, 80);

        &:hover {
            cursor: default
        }
    }
}

.source {
    margin-right: 1rem;
    padding: 6px 10px;

    border: 2px solid black;

    font-size: 1rem;
    font-weight: 400;
    text-decoration: none;
    color: black;

    transition: all 200ms cubic-bezier(0.165, 0.84, 0.44, 1);

    &:hover {
        background-color: black;
        color: white;
    }

    &-disabled {
        margin-right: 1rem;
        padding: 6px 10px;

        border: 2px solid lighten(black, 80);

        font-size: 1rem;
        font-weight: 400;
        text-decoration: none;
        color: lighten(black, 80);

        &:hover {
            cursor: default
        }
    }
}
</style>

<script setup>
const props = defineProps({
    name: String,
    img: String,
    tags: Array,
    website: String,
    source: String,
    desc: String
})
</script>