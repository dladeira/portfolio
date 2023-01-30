<template>
    <article class="service">
        <h4 class="name">{{ name }}</h4>
        <pre class="desc">{{ desc }}</pre>

        <div class="bot">
            <div class="price">Starting from <span class="number">${{ price }}</span></div>
            <nuxt-link to="/contact" class="order">Order</nuxt-link>
        </div>
    </article>
</template>

<style lang="scss" scoped>
.service {
    width: 31%;

    margin-bottom: 3rem;
    padding: 1.25rem 1.75rem;

    border-radius: 10px;

    background-color: white;

    box-shadow: 0 0 4px 0 rgba(black, 0.25);
}

.name {
    margin: 0 0 1rem;

    font-size: 2rem;
    font-weight: 700;
}

.desc {
    height: 12rem;

    font-family: 'Outfit', sans-serif;
    line-height: 1.4rem;
    white-space: pre-wrap;
}

.bot {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.price {
    color: $gray;
}

.number {
    color: black;
}

.order {
    padding: 0.25rem 0.75rem;

    border: 2px solid $blue;

    transition: all 200ms cubic-bezier(0.165, 0.84, 0.44, 1);

    text-decoration: none;
    color: black;

    &:hover {
        background-color: $blue;
        color: white;
    }
}
</style>

<script setup>
const props = defineProps({
    name: String,
    desc: String,
    price: String
})
</script>