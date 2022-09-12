<template>
    <div class="container" :id="id">
        <div class="line" />
        <h1 class="title">{{title}}</h1>
        <div class="line" />
    </div>
</template>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    margin-bottom: 100px;
    padding-top: 100px;

    @include tablet-only {
        margin-bottom: 50px;
        padding-top: 50px;
    }
}

.line {
    height: 1px;
    width: 100%;
    
    background-color: $secondary;
}

.title {
    margin: 0 20px;

    color: $secondary;
    font-size: 2rem;
}
</style>

<script>
export default {
    props: {
        title: String,
        id: String
    }
}
</script>