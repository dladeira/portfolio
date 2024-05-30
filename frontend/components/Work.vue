<template>
    <Block class="project" red>
        <div class="text">
            <div class="project-header">
                <h4 class="title">{{ title }}</h4>
                <div class="tags">
                    <div class="tag" v-for="tag in tags">{{ tag }}</div>
                </div>
            </div>
            <h5 class="subtitle">{{ subtitle }}</h5>
            <p class="desc">
                {{ desc }}
            </p>

            <nuxt-link :href="website" class="button-website" target="_blank">{{ $t("works.button1") }}</nuxt-link>
        </div>
        <nuxt-img class="image" :src="img + '.png'" format="webp" alt="Project Preview" />
    </Block>
</template>

<style lang="scss" scoped>
.project {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: stretch;

    width: 100%;

    &:last-child {
        margin-bottom: 0;
    }

    @include phone-only {
        flex-direction: column-reverse;

        margin-bottom: 10rem;
    }
}

.text {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    width: 40%;

    @include laptop-only {
        width: 35%;
    }

    @include phone-only {
        width: 100%;
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

    font-size: 2.5rem;
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
    gap: 1rem;

    @include phone-only {
        justify-content: center;
    }
}

.tag {
    padding: 0.75rem 1.5rem;

    font-size: 1rem;
    font-weight: 400;
    background-color: rgba(white, 0.1);
    color: white;
}

.subtitle {
    margin: 0.5rem 0 0 0;

    font-size: 1.25rem;
    font-weight: 400;
    color: $blue;
}

.desc {
    margin: 1.5rem 0 2rem;

    font-size: 1.25rem;
    line-height: 2.25rem;
    color: rgba(white, 0.5);

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
    flex: 1;

    margin: 0 6rem;

    overflow: hidden;

    box-shadow: 12px 12px 0 rgba(black, 0.2);
}

.button-website {
    margin-top: auto;
    padding: 0.9rem 2.75rem;

    font-size: 1rem;
    font-weight: 400;
    text-decoration: none;
    background-color: $blue-btn;
    color: white;

    box-shadow: 8px 8px 0 rgb(black, 0.2);
    transition: $shadow-transition;

    &:hover {
        cursor: pointer;

        transform: translate(8px, 8px);
        box-shadow: 0px 0px 0 rgba(black, 0.2);
    }
}
</style>

<script setup>
const props = defineProps({
    title: String,
    subtitle: String,
    img: String,
    tags: Array,
    website: String,
    desc: String,
});
</script>
