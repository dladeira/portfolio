<template>
    <div class="container">
        <div class="link">About</div>
        <div class="link">Projects</div>
        <div class="brand">Ladeira<span class="brand-light">.eu</span></div>
        <div class="link">Pricing</div>
        <div class="link">Contact</div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    position: absolute;
    left: 50%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 50%;
    min-width: 800px;

    margin: 15px auto;

    transform: translate(-50%, 0);
}

.brand {
    font-size: 2.25rem;
    font-weight: 700;
    color: white;
}

.brand-light {
    color: #9FCFF1;
}

.link {
    font-size: 1.25rem;
    text-decoration: none;
    color: white;
}
</style>