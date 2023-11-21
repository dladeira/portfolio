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
    padding-left: 1rem;

    font-size: 1rem;
    font-weight: 700;
    color: white;
}

.input {
    height: 12rem;
    width: 100%;

    padding: 1rem 1rem;

    border: 1px solid rgba(white, 0.3);
    border-radius: 5px;

    font-size: 1rem;
    font-family: "League Spartan", sans-serif;
    background-color: rgba(white, 0.1);
    color: white;

    box-shadow: 0 0 4px 0 rgba(black, 0.25);
    outline: none;

    &::placeholder {
        color: rgba(white, 0.6);
    }

    &:focus {
        outline: none;

        border: 1px solid rgba(white, 1);
        box-shadow: 0 0 8px 0 rgba(black, 0.25);
    }

    &:disabled {
        color: rgba(white, 0.3);
    }

    @include phone-only {
        font-size: 1.25rem;
    }
}
</style>

<script setup>
const props = defineProps({
    name: String,
    placeholder: String,
    type: String,
    id: String,
    disabled: Boolean,
});
</script>
