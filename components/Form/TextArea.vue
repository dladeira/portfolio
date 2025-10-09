<template>
    <div class="input-wrapper">
        <label class="name" :for="id">{{ name }}</label>
        <textarea class="input" :name="id" :type="type" :placeholder="placeholder" :disabled="disabled" required :id="id" />
    </div>
</template>

<style lang="scss" scoped>
.input-wrapper {
    width: 100%;
}

.name {
    display: block;

    width: 100%;

    padding-bottom: 0.75rem;

    font-size: 0.875rem;
    font-weight: 400;
    color: rgba(white, 0.5);
}

.input {
    height: 16rem;
    width: 100%;

    padding: 0.75rem 1rem;

    border: 1px solid transparent;
    border-radius: 5px;

    font-size: 1rem;
    font-family: Inter, sans-serif;
    background-color: rgba(white, 0.03);
    color: white;

    outline: none;
    resize: none;

    &::placeholder {
        color: rgba(white, 0.2);
    }

    &:focus {
        outline: none;
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
})
</script>
