<template>
    <section class="section" id="about">
        <h3 class="section-title">{{ $t("about.header") }}</h3>
        <div class="content">
            <div class="text">
                <h4 class="title">{{ $t("about.title") }}</h4>
                <p class="paragraph" v-html="formatMsg(t('about.desc1'))" />
                <p class="paragraph" v-html="formatMsg(t('about.desc2'))" />
                <p class="paragraph" v-html="formatMsg(t('about.desc3'))" />
            </div>
            <div />
            <div class="img-wrapper">
                <nuxt-img class="img" src="/hero.png" alt="Little Daniel Ladeira" format="webp" />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.section {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    background-color: $background-color-2;

    padding: 6rem 0;
}

.section-title {
    margin: 0 0 4rem;

    font-size: 3rem;
}

.content {
    display: grid;
    grid-template-columns: 50% 1fr min-content;

    margin: 0 auto;

    @include resizable-width;

    @include small-laptop-only {
        grid-template-columns: 50% 1fr min-content;
    }

    @include tablet-below {
        grid-template-columns: 1fr;
        gap: 1rem;
    }
}

.text {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    width: 100%;

    @include tablet-below {
        align-items: center;
    }
}

.title {
    margin: 0 0 0.5rem;

    font-size: 2.25rem;
    font-weight: 700;
}

.paragraph {
    margin: 0 0 1.5rem;

    font-size: 1rem;
    line-height: 160%;
    color: rgba(white, 0.5);

    &-highlighted {
        color: white;
    }

    @include tablet-below {
        text-align: center;
    }
}

.img-wrapper {
    border-radius: 50px;

    background-color: rgba(black, 0.1);

    overflow: hidden;

    aspect-ratio: 1 / 1;
}

.img {
    display: block;

    width: 100%;

    margin: 0 auto;

    transform: translate(1%, 0);
}
</style>

<script setup>
const { t } = useI18n()

function formatMsg(msg) {
    var msg = msg.split("*")
    var final_msg = ""

    for (var index in msg) {
        final_msg += msg[index]

        if (index < msg.length - 1)
            if (index % 2 == 0) final_msg += '<span style="color: white">'
            else final_msg += "</span>"
    }

    return final_msg
}
</script>
