<template>
    <div class="container"></div>
</template>

<style lang="scss" scoped>
.blank {
    color: white;
}
</style>

<script setup>
const popupSent = useState("popupSent");
popupSent.value = true;

onMounted(() => {
    navigateTo("/");
});
</script>
