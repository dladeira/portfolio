<template>
    <article class="project">
        <nuxt-img class="image" :src="img" format="webp" alt="Project Preview" />
        <h4 class="name">{{ name }}</h4>
        <div class="tags">
            <div class="tag" v-for="tag in tags">{{ tag }}</div>
        </div>
        <p class="desc">
            {{ desc }}
        </p>
        <div class="buttons">
            <nuxt-link v-if="website" :href="website" class="website">{{$t('projects.button1')}}</nuxt-link>
            <div v-else class="website-disabled">{{$t('projects.button1')}}</div>

            <nuxt-link v-if="source" :href="source" class="source">{{$t('projects.button2')}}</nuxt-link>
            <div v-else class="source-disabled">{{$t('projects.button2')}}</div>
        </div>
    </article>
</template>

<style lang="scss" scoped>
.project {
    width: 31%;

    padding: 30px 30px;

    border-radius: 10px;

    background-color: white;

    box-shadow: 0 0 4px 0 rgba(black, 0.25);

    @include phone-only {
        width: 100%;

        margin-bottom: 3rem;
    }
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

    margin: 0;

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

    font-size: 1rem;

    @include phone-only {
        font-size: 0.75rem;
    }
}

.website {
    margin-right: 1rem;
    padding: 6px 10px;

    border: 2px solid $green;

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