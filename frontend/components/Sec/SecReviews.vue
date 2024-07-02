<template>
    <div class="section" id="reviews">
        <div class="section-inner">
            <h3 class="section-title">{{ $t("reviews.title") }}</h3>
            <div class="reviews-grid">
                <Review v-for="review of reviews" :id="review.id" />
            </div>
        </div>
    </div>
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
    margin: 0 auto 4rem;

    font-size: 3rem;
    text-align: center;
}

.reviews-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1.5rem;

    @include resizable-width;

    @include tablet-only {
        grid-template-columns: 1fr 1fr;
    }

    @include phone-only {
        grid-template-columns: 1fr;
    }
}
</style>

<script setup>
const reviews = [
    {
        id: "marbar",
    },
    {
        id: "infracharm",
    },
    {
        id: "spaceley",
    },
    {
        id: "adnrl",
    },
]
</script>
