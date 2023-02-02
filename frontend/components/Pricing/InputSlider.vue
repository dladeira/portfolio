<template>
    <div class="input">
        <div class="header">
            <div class="title">{{ title }}</div>
            <div class="count">{{value}}<span class="max">/{{range[1]}}</span></div>
        </div>

        <input type="range" :min="range[0]" :max="range[1]" class="slider" @input="sliderChange" :value="value">
    </div>
</template>

<style lang="scss" scoped>
.input {
    width: 23%;

    @include phone-only {
        width: 100%;
    }
}
.header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 1rem;

    font-size: 1rem;
    font-weight: 400;
    color: black;
}

.max {
    color: $gray;
}

// ==========
// SLIDER
// ==========

$sliderHeight: 0.75rem;
$thumbMultiplier: 2;

.slider {
    height: $sliderHeight;
    width: 100%;
    
    border-radius: 1000px;

    background-color: #d3d3d3;

    appearance: none;
    opacity: 0.7;
    outline: none;
    transition: opacity .2s;
}


.slider:hover {
    opacity: 1;
}

.slider::-webkit-slider-thumb {
    height: calc($sliderHeight * $thumbMultiplier);
    width: calc($sliderHeight * $thumbMultiplier);

    border-radius: 1000px;

    background-color: $blue;

    appearance: none;
    cursor: pointer;
}
</style>

<script setup>
var value = ref(props.default ? props.default : 0)
const props = defineProps({
    title: String,
    range: Array,
    default: Number,
    id: String
})
const emits = defineEmits(['change'])

function sliderChange(e) {
    value.value = e.target.value
    emits('change', props.id, +e.target.value)
} 

</script>