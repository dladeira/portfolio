<template>
    <div class="review">
        <div class="review-header">
            <img class="review-image" :src="image" :alt="title" />
            <div class="review-info">
                <h4 class="review-title">{{ title }}</h4>
                <p class="review-subtitle">{{ subtitle }}</p>
            </div>
        </div>
        <p class="review-text">{{ text }}</p>
    </div>
</template>

<style lang="scss" scoped>
.review {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.review-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
}

.review-image {
    width: 2.5rem;
    height: 2.5rem;

    border-radius: 9999px;
}

.review-info {
    display: flex;
    flex-direction: column;
}

.review-title {
    margin: 0;

    font-size: 1.25rem;
    font-weight: 700;
    color: white;
}

.review-subtitle {
    margin: 0;

    font-size: 0.75rem;
    color: #9ca3af;
}

.review-text {
    margin: 0;

    font-size: 0.75rem;
    font-style: italic;
    line-height: 1.5rem;
    color: #9ca3af;
}
</style>

<script setup>
defineProps({
    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
})
</script>
