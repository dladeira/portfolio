<template>
    <div class="input-wrapper">
        <div class="name">{{ name }}</div>
        <textarea class="input" :name="id" :type="type" :placeholder="placeholder" :disabled="disabled" required />
    </div>
</template>

<style lang="scss" scoped>
.input-wrapper {
    width: 100%;
}

.name {
    width: 100%;

    margin-bottom: 1rem;

    font-size: 1rem;
    font-weight: 700;
    color: black;
}

.input {
    height: 12rem;
    width: 100%;

    padding: 0.75rem 0.75rem;

    border: none;
    border-radius: 5px;

    font-family: 'Outfit', sans-serif;
    font-size: 1rem;

    box-shadow: 0 0 4px 0 rgba(black, 0.25);
    outline: none;
    resize: none;

    &::placeholder {
        color: rgba($gray, 0.5);
    }

    &:focus {
        outline: none;

        box-shadow: 0 0 8px 0 rgba(black, 0.25);
    }
}
</style>

<script setup>
const props = defineProps({
    name: String,
    placeholder: String,
    type: String,
    id: String,
    disabled: Boolean
})</script>