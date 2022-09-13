<template>
    <div class="container">
        <div class="column">
            <h1 class="title">Frontend</h1>

            <div class="category">
                <h2 class="subtitle">{{ $t("skill1") }}</h2>
                <div class="items">
                    <nuxt-img class="item" src="/images/logo-react.png" height="40" width="70" format="webp" alt="React"/>
                    <nuxt-img class="item" src="/images/logo-next.png" height="40" width="70" format="webp" alt="Next"/>
                    <nuxt-img class="item" src="/images/logo-vue.png" height="40" width="70" format="webp" alt="Vue"/>
                    <nuxt-img class="item" src="/images/logo-nuxt.jpg" height="40" width="70" format="webp" alt="Nuxt"/>
                </div>
            </div>

            <div class="category">
                <h2 class="subtitle">{{ $t("skill2") }}</h2>
                <div class="items">
                    <nuxt-img class="item background" src="/images/logo-sass.png" height="40" width="70" format="webp" alt="Sass"/>
                    <nuxt-img class="item" src="/images/logo-tailwind.png" height="40" width="70" format="webp" alt="Tailwind"/>
                </div>
            </div>
        </div>

        <div class="column">
            <h1 class="title">Backend</h1>

            <div class="category">
                <h2 class="subtitle">{{ $t("skill3") }}</h2>
                <div class="items">
                    <nuxt-img class="item" src="/images/logo-node.png" height="40" width="70" format="webp" alt="Node"/>
                    <nuxt-img class="item" src="/images/logo-passport.webp" height="40" width="70" format="webp" alt="Passport"/>
                </div>
            </div>

            <div class="category">
                <h2 class="subtitle">{{ $t("skill4") }}</h2>
                <div class="items">
                    <nuxt-img class="item" src="/images/logo-mongodb.jpg" height="40" width="70" format="webp" alt="MongoDB"/>
                </div>
            </div>
        </div>

        <div class="column">
            <h1 class="title">Extra</h1>

            <div class="category">
                <h2 class="subtitle">{{ $t("skill5") }}</h2>
                <div class="items">
                    <nuxt-img class="item" src="/images/logo-github.png" height="40" width="70" format="webp" alt="Github"/>
                    <nuxt-img class="item" src="/images/logo-figma.png" height="40" width="70" format="webp" alt="Figma"/>
                    <nuxt-img class="item" src="/images/logo-asana.png" height="40" width="70" format="webp" alt="Asana"/>
                </div>
            </div>

            <div class="category">
                <h2 class="subtitle">{{ $t("skill6") }}</h2>
                <div class="items">
                    <nuxt-img class="item" src="/images/flag-us.png" height="40" width="70" format="webp" alt="Flag US"/>
                    <nuxt-img class="item" src="/images/flag-pl.png" height="40" width="70" format="webp" alt="Flag PL"/>
                    <nuxt-img class="item" src="/images/flag-pt.png" height="40" width="70" format="webp" alt="Flag PT"/>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    @include tablet-only {
        flex-direction: column;
    }
}

.column {
    width: 30%;

    @include tablet-only {
        width: 100%;

        margin-bottom: 50px;
    }
}

.title {
    margin-bottom: 70px;

    text-align: center;

    @include tablet-only {
        margin-bottom: 30px;
    }
}

.subtitle {

    font-size: 1.25rem;
    text-align: center;
    color: $tertiary;
}

.items {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    margin-bottom: 50px;

    @include tablet-only {
        margin-bottom: 25px;
    }
}

.item {
    height: 40px;
    width: 70px;

    margin: 0 10px;

    border-radius: 10px;
}

.background {
    background-color: $primary;
}
</style>

<script>
</script>