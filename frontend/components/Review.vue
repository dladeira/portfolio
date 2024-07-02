<template>
    <div class="review">
        <p class="review-text" v-html="formatMsg($t(`reviews.${id}.desc`))" />

        <nuxt-img class="review-img" :src="`/reviews/${id}.png`" />
        <h4 class="review-title">{{ $t(`reviews.${id}.name`) }}</h4>
        <div class="review-info">
            <h5 class="review-position">
                {{ $t(`reviews.${id}.position`) }} <span class="review-position-company">{{ $t(`reviews.${id}.company`) }}</span>
            </h5>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.review {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    height: 22rem;

    padding: 1.5rem;

    background-color: lighten($background-color-2, 5);
}

.review-text {
    margin: 0;

    line-height: 160%;
    color: rgba(white, 0.5);
}

.review-img {
    height: 3rem;
    width: 3rem;

    margin: auto 0 1rem;

    border-radius: 1000px;
}

.review-title {
    margin: 0;

    font-size: 1.25rem;
}

.review-position {
    margin: 0.3rem 0 0;

    font-weight: 400;
    font-size: 0.75rem;
    color: rgba(white, 0.5);

    &-company {
        color: white;
    }
}
</style>

<script setup>
const props = defineProps({
    id: String,
})

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
