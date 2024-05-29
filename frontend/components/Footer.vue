<template>
    <div class="container">
        <div class="content">
            <div class="copy">© {{ new Date().getFullYear() }} Daniel Ladeira</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    position: absolute;
    bottom: 0;
    width: 100%;

    padding: 1.5rem 0;

    background-color: $bg-color-2;
}

.content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin: 0 auto;

    @include resizable-width;
}

.copy {
    color: rgb(white, 0.2);
}

.icon {
    height: 20px;
    width: 20px;

    filter: invert(60%);

    &:hover {
        filter: invert(90%);
    }

    &-wrapper {
        margin-left: 1rem;
    }
}
</style>
