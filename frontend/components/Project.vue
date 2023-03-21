<template>
    <article :class="align ? 'project' : 'project-reversed'">
        <div class="images">
            <nuxt-img class="image-2" :src="img + '-2.png'" format="webp" alt="Project Preview" />
            <nuxt-img class="image-1" :src="img + '-1.png'" format="webp" alt="Project Preview" />
        </div>
        <div class="text">
            <div class="project-header">
                <h4 class="name">{{ name }}</h4>
                <div class="tags">
                    <div class="tag" v-for="tag in tags">{{ tag }}</div>
                </div>
            </div>
            <p class="desc">
                {{ desc }}
            </p>

            <div :class="align ? 'buttons' : 'buttons-reversed'">
                <nuxt-link v-if="!view" :href="website" :class="website ? 'website' : 'website-disabled'">{{ $t('projects.button1') }}</nuxt-link>
                <nuxt-link v-if="!view" :href="source" :class="source ? 'source' : 'source-disabled'">{{ $t('projects.button2') }}</nuxt-link>
                <nuxt-link v-if="view" :href="view" :class="view ? 'view' : 'view-disabled'">View collection</nuxt-link>
            </div>
        </div>
    </article>
</template>

<style lang="scss" scoped>
.project {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    width: 100%;

    margin-bottom: 15rem;

    &-reversed {
        @extend .project;

        flex-direction: row-reverse !important;
    }

    &:last-child {
        margin-bottom: 0;
    }
}

$image-width: 25rem;

.images {
    position: relative;

    width: $image-width;

    transform: translate(0, 2rem);
}

.image-1,
.image-2 {
    position: absolute;

    width: $image-width;

    border-radius: 10px;

    box-shadow: 0 0 16px 0 rgba(black, 0.25);
}

.image-1 {
    transform: translate(-5rem, -4rem);
}

.text {
    width: 40%;
}

.project-header {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
}

.name {
    margin: 0 2rem 0 0;

    font-size: 2rem;
    font-weight: 700;
}

.tags {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
}

.tag {
    margin-right: 1rem;
    padding: 0.5rem 1rem 0.35rem;

    border-radius: 5px;

    font-size: 0.9rem;
    font-weight: 400;
    background-color: rgba(white, 0.2);
    color: white;
}

.desc {
    margin: 2.5rem 0;

    font-size: 1.1rem;
    text-indent: 3rem;
    line-height: 1.9rem;
}

.buttons {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    &-reversed {
        @extend .buttons;

        justify-content: flex-start;
    }
}

.image {
    width: 100%;
}

@mixin button {
    margin-right: 1rem;
    padding: 0.5rem 1.5rem;

    border: 2px solid white;
    border-radius: 10px;

    font-size: 1rem;
    font-weight: 400;
    text-decoration: none;
    color: white;

    transition: all 200ms cubic-bezier(0.165, 0.84, 0.44, 1);

    &:hover {
        background-color: white;
        color: black;
    }

    &-disabled {
        margin-right: 1rem;
        padding: 0.5rem 1.5rem;

        border: 2px solid white;
        border-radius: 10px;

        font-size: 1rem;
        font-weight: 400;
        text-decoration: none;
        color: white;

        transition: all 200ms cubic-bezier(0.165, 0.84, 0.44, 1);

        opacity: 0.2;
        user-select: none;

        &:hover {
            background-color: transparent !important;
            color: white;
        }
    }
}

.website {
    @include button;

    border-color: $green;

    &-disabled {
        border-color: $green;
    }

    &:hover {
        background-color: $green;
        color: white;
    }
}

.source {
    @include button;

    border-color: white;

    &-disabled {
        border-color: white;
    }
    
    &:hover {
        background-color: white;
    }
}

.view {
    @include button;

    border-color: #007FDB;

    &-disabled {
        border-color: #007FDB;
    }

    &:hover {
        background-color: #007FDB;
        color: white;
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
    desc: String,
    align: Boolean,
    view: String
})
</script>