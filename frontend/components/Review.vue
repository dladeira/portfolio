<template>
    <div class="review">
        <div class="review-header">
            <NuxtImg class="review-img" :src="`/people/${id}.png`" />
            <div class="review-header-text">
                <h4 class="review-title">{{ $t(`reviews.${id}.name`) }}</h4>
                <h5 class="review-position">
                    {{ $t(`reviews.${id}.position`) }} <span class="review-position-company">{{ $t(`reviews.${id}.company`) }}</span>
                </h5>
            </div>
        </div>
        <p class="review-text" v-html="formatMsg($t(`reviews.${id}.desc`))" />

        <div class="review-date">{{ $t(`reviews.${id}.date`) }}</div>
    </div>
</template>

<style lang="scss" scoped>
.review {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    height: 100%;

    padding: 1rem 1.5rem 1.5rem;

    border-radius: 10px;

    background-color: #181f34;
}

.review-header {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 1.5rem;
}

.review-img {
    height: 4rem;
    width: 4rem;

    border-radius: 1000px;
}

.review-header-text {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.25rem;
}

.review-title {
    margin: 0;

    font-size: 2rem;
}

.review-position {
    margin: 0 0 0.25rem;

    font-weight: 400;
    font-size: 1rem;
    color: rgba(white, 0.5);

    &-company {
        color: white;
    }
}

.review-text {
    margin: 2rem 0;

    line-height: 180%;
    color: rgba(white, 0.5);
}

.review-date {
    padding: 0.5rem 1.5rem;

    border-radius: 5px;

    background-color: rgba(white, 0.1);
    color: white;
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
