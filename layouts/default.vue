<template>
    <div class="layout-container">
        <Navbar />
        <div class="layout-page-container">
            <slot />
        </div>
        <Footer />
        <PopupVerify v-if="popupVerify" />
        <PopupSent v-if="popupSent" />
        <PopupImage />
    </div>
</template>

<style lang="scss" scoped>
.layout-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

.layout-page-container {
    margin: 0 auto;
    padding: 5rem 0 7rem;

    @include resizable-width;
    @include tablet-below {
        padding: 8rem 0 6rem;
    }
}
</style>

<script setup>
const popupVerify = useState("popupVerify")
const popupSent = useState("popupSent")
</script>
