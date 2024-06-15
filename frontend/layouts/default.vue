<template>
    <Navbar />
    <slot />
    <Footer />
    <PopupVerify v-if="popupVerify" />
    <PopupSent v-if="popupSent" />
</template>

<script setup>
const popupVerify = useState("popupVerify");
const popupSent = useState("popupSent");
</script>
