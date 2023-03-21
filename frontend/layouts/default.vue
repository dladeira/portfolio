<template>
    <div class="page">
        <Navbar />
        <slot />
        <Footer />
        <PopupVerify v-if="popupVerify" />
        <PopupSent v-if="popupSent" />
    </div>
</template>

<script setup>
const popupVerify = useState('popupVerify')
const popupSent = useState('popupSent')
</script>