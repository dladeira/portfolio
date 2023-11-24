<template>
    <section class="section" id="about">
        <h3 class="section-title"><span class="section-title-index">01.</span> {{ $t("about.header") }}</h3>
        <div class="content">
            <div class="img-wrapper">
                <nuxt-img class="img" src="/hero.png" alt="Little Daniel Ladeira" format="webp" />
            </div>
            <div class="text">
                <h4 class="title">{{ $t("about.title") }}</h4>
                <p class="paragraph" v-html="formatMsg(t('about.desc1'))" />
                <div class="list">
                    <li class="list-item">{{ t("about.list.1") }}</li>
                    <li class="list-item">{{ t("about.list.2") }}</li>
                    <li class="list-item">{{ t("about.list.3") }}</li>
                    <li class="list-item">{{ t("about.list.4") }}</li>
                </div>
                <p class="paragraph" v-html="formatMsg(t('about.desc2'))" />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.section {
    @include phone-only {
        padding-top: 7rem;
    }
}

.content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin: 0 auto;

    @include resizable-width;

    @include phone-only {
        flex-direction: column;
    }
}

.img-wrapper {
    height: 26rem;
    width: 26rem;

    border-radius: 50px;

    background-color: rgba(white, 0.05);

    overflow: hidden;

    @include phone-only {
        display: none;
    }
}

.img {
    display: block;

    width: 80%;

    margin: 0 auto;

    filter: drop-shadow(-8px -6px 0 black);
    transform: translateY(3rem);
}

.text {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    width: 50%;

    @include phone-only {
        width: 90%;
    }
}

.title {
    margin: 0 0 1.5rem;

    font-size: 1.5rem;
    font-weight: 700;

    @include phone-only {
        margin-bottom: 0;
    }
}

.paragraph {
    font-size: 1.2rem;
    line-height: 2rem;
    color: #afafaf;

    &-highlighted {
        color: white;
    }
}

.list {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;

    gap: 1rem;

    font-size: 1rem;

    @include phone-only {
        grid-template-rows: 1fr 1fr 1fr 1fr;
        grid-template-columns: 1fr;
    }
}

.paragraph {
    text-indent: 2rem;

    @include phone-only {
        margin: 1rem 0;
    }
}
</style>

<script setup>
const { t } = useI18n();

function formatMsg(msg) {
    var msg = msg.split("'");
    var final_msg = "";

    for (var index in msg) {
        final_msg += msg[index];

        if (index < msg.length - 1)
            if (index % 2 == 0) final_msg += '<span style="color: white">';
            else final_msg += "</span>";
    }

    return final_msg;
}
</script>
