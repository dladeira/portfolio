<template>
    <div class="container">
        <div class="projects">
            <h1 class="title">Projects</h1>
            <Project title="LTracker" />
            <Project title="LadeiraCooking" />
            <Project title="BingBong" />
        </div>

        <div class="links">
            <h1 class="title">Socials</h1>

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
}

.projects {
    width: 70%;
}

.links {
    width: 20%;
}

.title {
    margin-bottom: 80px;

    text-align: center;
}

.social {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    margin: 20px 0;

    text-decoration: none;
    color: white;
}

.icon {
    height: 30px;
    width: 30px;

    margin-right: 15px;

    border-radius: 50px;
}
</style>