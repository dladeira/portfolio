<template>
    <section class="section" id="about">
        <h3 class="section-title"><span class="section-title-index">01.</span> About me</h3>
        <div class="content">
            <div class="img-wrapper">
                <nuxt-img class="img" src="/hero.png" alt="Little Daniel Ladeira" format="webp" />
            </div>
            <div class="text">
                <h4 class="title">Ambitious Programmer</h4>
                <p class="paragraph">My name is Daniel Ladeira and I am a <span class="paragraph-highlighted">trilingual web developer</span> based in <span class="paragraph-highlighted">Europe</span>. I specialize in coding websites but I also have experience in the following fields:</p>
                <div class="list">
                    <li class="list-item">Web Design/Development</li>
                    <li class="list-item">Data Visualization (dashboards)</li>
                    <li class="list-item">Java Software Development</li>
                    <li class="list-item">System Administration and Hosting</li>
                </div>
                <p class="paragraph">I also speak <span class="paragraph-highlighted">English</span>, <span class="paragraph-highlighted">Portuguese</span>, and <span class="paragraph-highlighted">Polish</span> fluently and can translate websites. I love challenges and am always ready to learn something new.</p>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.section {
    width: 100%;

    padding: 10rem 0;
}

.section-title {
    width: fit-content;

    margin: 0 auto 8rem;


    font-size: 3rem;

    &-index {
        color: #1FB3E2;
    }
}

.content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin: 0 auto;

    @include desktop-only {
        width: $content-desktop;
    }

    @include laptop-only {
        width: $content-laptop;
    }
}

.img-wrapper {
    height: 26rem;
    width: 26rem;

    border-radius: 50px;

    background-color: rgba(white, 0.1);

    overflow: hidden;
}

.img {
    width: 90%;

    transform: translate(0.5rem, 2rem);
}

.text {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    width: 50%;
}

.title {
    margin: 0 0 1.5rem;

    font-size: 1.5rem;
    font-weight: 700;
}

.paragraph {
    font-size: 1.2rem;
    line-height: 2rem;
    color: #AFAFAF;

    &-highlighted {
        color: white;
    }
}

.list {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;

    font-size: 1rem;

    &-item {
        margin-bottom: 1rem;
    }
}

.desc {
    margin: 0 0 1.5rem;

    font-size: 1.25rem;
    font-family: 'Outfit', sans-serif;
    white-space: pre-wrap;
    font-weight: 400;
}

.paragraph {
    text-indent: 2rem;
}
</style>

<script setup>
</script>