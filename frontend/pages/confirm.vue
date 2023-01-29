<template>
    <div class="container"></div>
</template>

<style lang="scss" scoped>
.container {
    height: 100%;
    background-image: $gradient-main;
}
</style>

<script setup>
const popupSent = useState('popupSent')
popupSent.value = true

onMounted(() => {
    navigateTo('/')
})
</script>