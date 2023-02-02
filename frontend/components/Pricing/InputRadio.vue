<template>
    <div class="input">
        <div class="header">
            <div class="title">{{ title }}</div>
            <div class="help">?</div>
            <pre class="help-extended">
                {{ help }}
            </pre>
        </div>

        <div class="values">
            <div class="value" v-for="value of values">
                <input class="hidden" type="radio" :name="id" :id="id + '-' + value[1]" :value="value[1]"
                    @change="inputChange">
                <label class="label" :for="id + '-' + value[1]">
                    <div :class="selected == value[1] ? 'radio-selected' : 'radio'" />
                    <div class="text">{{ value[0] }}</div>
                </label>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.input {
    font-size: 0.75rem;
}

.header {
    position: relative;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    width: 100%;

    margin-bottom: 1rem;

    font-weight: 400;
    color: black;

    @include phone-only {
        position: static;
    }
}

.help {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 1rem;
    width: 1rem;

    margin-left: 1rem;

    border-radius: 1000px;

    font-size: 0.75rem;
    background-color: $blue;
    color: white;

    opacity: 0.5;

    @include phone-only {
        height: 1.5rem;
        width: 1.5rem;
    }

    &:hover {
        cursor: pointer;
    }

    &:hover+.help-extended {
        display: flex;
        opacity: 1;
    }
}

.help-extended {
    position: absolute;
    left: 0;

    display: none;
    justify-content: center;
    align-items: center;

    height: fit-content;
    width: 18rem;

    padding: 0.5rem 0.5rem;

    border-radius: 5px;

    text-align: left;
    font-family: 'Outfit', sans-serif;
    font-size: 0.75rem;
    white-space: pre-line;
    background-color: $gray;
    color: white;

    opacity: 0;
    transition: opacity 200ms cubic-bezier(0.165, 0.84, 0.44, 1);

    transform: translate(calc(50% - 0.5rem), 10px);
    z-index: 4;

    @include phone-only {
        left: 50%;

        transform: translate(-50%, 10px);
    }
}

.value {
    margin-bottom: 0.5rem;
}

.label {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
}

.hidden {
    display: none;
}

.radio {
    height: 1rem;
    width: 1rem;

    margin-right: 0.5rem;

    border-radius: 1000px;

    background-color: rgba($gray, 0.2);

    &-selected {
        @extend .radio;

        background-color: $blue;
    }
}
</style>

<script setup>
const selected = ref(props.default ? props.default : props.values[0][1])
const emits = defineEmits(['change'])

const props = defineProps({
    id: String,
    title: String,
    help: String,
    values: Array,
    default: String,
})

function inputChange(e) {
    selected.value = e.target.value
    emits('change', props.id, e.target.value)
}
</script>