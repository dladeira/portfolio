<template>
    <section class="section" id="about">
        <h3 class="section-title"><span class="section-title-index">01.</span> {{ $t('about.header') }}</h3>
        <div class="content">
            <div class="img-wrapper">
                <nuxt-img class="img" src="/hero.png" alt="Little Daniel Ladeira" format="webp" />
            </div>
            <div class="text">
                <h4 class="title">{{ $t('about.title') }}</h4>
                <p class="paragraph" v-html="formatMsg(t('about.desc1'))" />
                <div class="list">
                    <li class="list-item">{{ t('about.list.1') }}</li>
                    <li class="list-item">{{ t('about.list.2') }}</li>
                    <li class="list-item">{{ t('about.list.3') }}</li>
                    <li class="list-item">{{ t('about.list.4') }}</li>
                </div>
                <p class="paragraph" v-html="formatMsg(t('about.desc2'))" />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.section {
    width: 100%;

    padding: 10rem 0;
}

.section-title {
    width: fit-content;

    margin: 0 auto 8rem;


    font-size: 3rem;

    &-index {
        color: #1FB3E2;
    }
}

.content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin: 0 auto;

    @include desktop-only {
        width: $content-desktop;
    }

    @include laptop-only {
        width: $content-laptop;
    }
}

.img-wrapper {
    height: 26rem;
    width: 26rem;

    border-radius: 50px;

    background-color: rgba(white, 0.1);

    overflow: hidden;
}

.img {
    width: 90%;

    transform: translate(0.5rem, 2rem);
}

.text {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    width: 50%;
}

.title {
    margin: 0 0 1.5rem;

    font-size: 1.5rem;
    font-weight: 700;
}

.paragraph {
    font-size: 1.2rem;
    line-height: 2rem;
    color: #AFAFAF;

    &-highlighted {
        color: white;
    }
}

.list {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;

    font-size: 1rem;

    &-item {
        margin-bottom: 1rem;
    }
}

.desc {
    margin: 0 0 1.5rem;

    font-size: 1.25rem;
    font-family: 'Outfit', sans-serif;
    white-space: pre-wrap;
    font-weight: 400;
}

.paragraph {
    text-indent: 2rem;
}
</style>

<script setup>
const { t } = useI18n()

function formatMsg(msg) {
    var msg = msg.split('\'')
    var final_msg = ""

    for (var index in msg) {
        final_msg += msg[index]

        if (index < msg.length - 1)
            if (index % 2 == 0)
                final_msg += "<span style=\"color: white\">"
            else
                final_msg += "</span>"
    }

    return final_msg
}
</script>