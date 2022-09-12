<template>
    <div class="container">
        <div class="column">
            <h1 class="title">Frontend</h1>

            <div class="category">
                <h2 class="subtitle">Frameworks</h2>
                <div class="items">
                    <nuxt-img class="item" src="/images/logo-react.png" height="40" width="70" />
                    <nuxt-img class="item" src="/images/logo-angular.png" height="40" width="70" />
                    <nuxt-img class="item" src="/images/logo-next.png" height="40" width="70" />
                </div>
            </div>

            <div class="category">
                <h2 class="subtitle">Styling</h2>
                <div class="items">
                    <nuxt-img class="item background" src="/images/logo-sass.png" height="40" width="70" />
                    <nuxt-img class="item" src="/images/logo-tailwind.png" height="40" width="70" />
                </div>
            </div>
        </div>

        <div class="column">
            <h1 class="title">Backend</h1>

            <div class="category">
                <h2 class="subtitle">Engines</h2>
                <div class="items">
                    <nuxt-img class="item" src="/images/logo-node.png" height="40" width="70" />
                    <nuxt-img class="item" src="/images/logo-passport.webp" height="40" width="70" />
                </div>
            </div>

            <div class="category">
                <h2 class="subtitle">Databases</h2>
                <div class="items">
                    <nuxt-img class="item" src="/images/logo-mongodb.jpg" height="40" width="70" />
                </div>
            </div>
        </div>

        <div class="column">
            <h1 class="title">Extra</h1>

            <div class="category">
                <h2 class="subtitle">Tools</h2>
                <div class="items">
                    <nuxt-img class="item" src="/images/logo-github.png" height="40" width="70" />
                    <nuxt-img class="item" src="/images/logo-figma.png" height="40" width="70" />
                    <nuxt-img class="item" src="/images/logo-asana.png" height="40" width="70" />
                </div>
            </div>

            <div class="category">
                <h2 class="subtitle">Languages</h2>
                <div class="items">
                    <nuxt-img class="item" src="/images/flag-us.png" height="40" width="70" />
                    <nuxt-img class="item" src="/images/flag-pl.png" height="40" width="70" />
                    <nuxt-img class="item" src="/images/flag-pt.png" height="40" width="70" />
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
}

.column {
    width: 30%;
}

.title {
    margin-bottom: 70px;

    text-align: center;
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