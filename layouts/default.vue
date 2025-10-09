<template>
    <div class="layout-container">
        <Navbar />
        <div class="layout-page-container">
            <slot />
        </div>
        <Footer />
        <PopupImage />
    </div>
</template>

<style lang="scss" scoped>
.layout-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    min-height: 100vh;
}

.layout-page-container {
    margin: 0 auto;
    padding: 5rem 0 0;

    @include resizable-width;
    @include tablet-below {
        padding: 8rem 0 6rem;
    }
}
</style>
