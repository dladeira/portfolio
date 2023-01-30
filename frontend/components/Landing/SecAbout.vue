<template>
    <section class="container" id="about">
        <div class="content">
            <nuxt-img class="img" src="/hero2.png" alt="Little Daniel Ladeira" />
            <div class="text">
                <h3 class="title">Ambitious Programmer</h3>
                <p class="desc">My name is Daniel Ladeira and I am a trilingual developer based in Warsaw, Poland.<br /><br />
                    I started my coding journey when I just 11 years old making Minecraft mods and plugins and from there branched out into other fields of Software Development. Fast-forward a couple years and now I'm building full-stack web applications with fastest and newest technologies on the market such as React and Vue.
                </p>
                <div class="tags">
                    <div class="tag tech">React / NEXT</div>
                    <div class="tag tech">Vue / NUXT</div>
                    <div class="tag tech">MongoDB</div>
                    <div class="tag tech">NodeJS</div>
                </div>
                <div class="tags">
                    <div class="tag english">English</div>
                    <div class="tag portuguese">Portuguese</div>
                    <div class="tag polish">Polish</div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.container {
    width: 100%;

    padding: 10rem 0;

    background-color: #FBFBFB;
}

.content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 1150px;

    margin: 0 auto;
}

.img {
    width: 30%;
}

.text {
    width: 60%;
}

.title {
    margin: 0 0 1.5rem;

    font-size: 2rem;
    font-weight: 700;
}

.desc {
    margin: 0 0 1.5rem;

    font-size: 1.25rem;
    font-weight: 400;
}

.tags {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    margin-bottom: 1.25rem;
}

.tag {
    margin-right: 1.25rem;
    padding: 10px 20px;

    font-size: 1.25rem;
    font-weight: 400;
    background-color: black;
    color: white;
}

.english {
    background-color: #002868;
}

.portuguese {
    background-color: #046A38;
}

.polish {
    background-color: #D22630;
}
</style>