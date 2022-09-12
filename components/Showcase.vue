<template>
    <div class="container">
        <div class="projects">
            <h1 class="title">{{ $t("showcase1") }}</h1>
            <Project title="LTracker" image1="/images/ltracker-1.png" image2="/images/ltracker-2.png" />
            <Project title="LadeiraCooking" image1="/images/cooking-1.png" image2="/images/cooking-2.png" />
            <Project title="AswPlus" image1="/images/asw-1.png" image2="/images/asw-2.png" />
        </div>

        <div class="links">
            <h1 class="title">{{ $t("showcase2") }}</h1>

            <div class="socials">
                <a class="social" href="https://github.com/dladeira">
                    <nuxt-img class="icon" src="/images/icon-github.png" height="30" width="30" />
                    <div class="link">dladeira</div>
                </a>
                <a class="social" href="https://stackoverflow.com/users/9564834/daniel-ladeira">
                    <nuxt-img class="icon" src="/images/icon-overflow.png" height="30" width="30" />
                    <div class="link">Daniel Ladeira</div>
                </a>
                <a class="social" href="https://bukkit.org/members/chr0mosom3.91305050/">
                    <nuxt-img class="icon" src="/images/icon-bukkit.png" height="30" width="30" />
                    <div class="link">Chr0mosom3</div>
                </a>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    @include tablet-only {
        flex-direction: column;
    }
}

.projects {
    width: 70%;

    @include tablet-only {
        width: 100%;
    }
}

.links {
    width: 20%;

    @include tablet-only {
        width: 100%;
    }
}

.title {
    margin-bottom: 80px;

    text-align: center;

    @include tablet-only {
        margin-top: 50px;
        margin-bottom: 40px;
    }
}

.social {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    margin: 20px 0;

    text-decoration: none;
    color: white;

    @include tablet-only {
        justify-content: center;
    }
}

.icon {
    height: 30px;
    width: 30px;

    margin-right: 15px;

    border-radius: 50px;
}
</style>

<script>

</script>