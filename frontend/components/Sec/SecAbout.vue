<template>
    <section class="section" id="about">
        <Block blue>
            <h3 class="section-title">
                {{ $t("about.header") }} <span class="section-title-shadow">{{ $t("about.header") }}</span>
            </h3>
        </Block>
        <div class="form-block">
            <Block red>
                <div class="content-text">
                    <p class="text-paragraph" v-html="formatMsg(t('about.desc1'))" />
                    <div class="text-list">
                        <li>{{ t("about.list.1") }}</li>
                        <li>{{ t("about.list.2") }}</li>
                        <li>{{ t("about.list.3") }}</li>
                        <li>{{ t("about.list.4") }}</li>
                    </div>
                    <p class="text-paragraph" v-html="formatMsg(t('about.desc2'))" />
                </div>
            </Block>
        </div>
        <div class="img-wrapper">
            <nuxt-img class="img" src="/hero.png" alt="Little Daniel Ladeira" format="webp" />
        </div>
    </section>
</template>

<style lang="scss" scoped>
.section {
    position: relative;

    margin: 0;

    background-color: $bg-color-2;
}

.form-block {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: stretch;

    padding: 6rem 0;

    @include phone-only {
        flex-direction: column;
    }
}

.content-text {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1.5rem;

    width: 35%;
}

.text-paragraph {
    margin: 0;

    font-size: 1.25rem;
    line-height: 2.5rem;
    color: rgba(white, 0.5);

    &-highlighted {
        color: white;
    }
}

.text-list {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    margin: 0 auto;

    font-size: 1.25rem;
    color: rgba(white, 0.5);

    @include phone-only {
        grid-template-rows: 1fr 1fr 1fr 1fr;
        grid-template-columns: 1fr;
    }
}

.img-wrapper {
    position: absolute;
    top: 50%;
    right: 0;
    height: 24rem;
    width: 24rem;

    border-radius: 50px;

    margin: 0 auto;

    background-color: rgba(black, 0.1);

    overflow: hidden;

    transform: translate(-50%, -50%);
    @include phone-only {
        display: none;
    }
}

.img {
    display: block;

    height: 100%;

    margin: 0 auto;
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
