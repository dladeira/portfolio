<template>
    <section class="container" id="about">
        <div class="content">
            <nuxt-img class="img" src="/hero2.png" alt="Little Daniel Ladeira" format="webp" />
            <div class="text">
                <h3 class="title">{{ $t('about.title') }}</h3>
                <pre class="desc">{{ $t('about.desc') }}
                </pre>
                <div class="tags">
                    <div class="tag tech">React / NEXT</div>
                    <div class="tag tech">Vue / NUXT</div>
                    <div class="tag tech">MongoDB</div>
                    <div class="tag tech">NodeJS</div>
                </div>
                <div class="tags">
                    <div class="tag english">{{$t('about.lang1')}}</div>
                    <div class="tag portuguese">{{$t('about.lang2')}}</div>
                    <div class="tag polish">{{$t('about.lang3')}}</div>
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
    font-family: 'Outfit', sans-serif;
    white-space: pre-wrap;
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

<script setup>
</script>