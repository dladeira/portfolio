<template>
    <div class="container">
        <div class="content">
            <div class="footer-text">© 2024 Daniel Ladeira</div>
            <nuxt-link class="footer-text">Privacy Policy</nuxt-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    position: absolute;
    bottom: 0;
    width: 100%;

    padding: 1rem 0;

    background-color: $background-color-2;
}

.content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin: 0 auto;

    @include resizable-width;
}

.footer-text {
    font-size: 1rem;
    color: rgba(white, 0.2);
}
</style>
