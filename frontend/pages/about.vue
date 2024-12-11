<template>
    <h1 class="page-title">About Me</h1>

    <div class="page">
        <div class="content">
            <section class="section">
                <h2 class="section-title-main">Daniel Ladeira</h2>
                <div class="section-paragraphs">
                    <p class="section-paragraph">My name is Daniel Ladeira and I am a trilingual web developer based in Amsterdam, fluent in English, Portuguese, and Polish. My programming journey began in 2020, creating custom Minecraft plugins and servers, which later transitioned to web development.</p>
                    <p class="section-paragraph">I recently graduated from the American School of Warsaw, and this year I'm starting my Bachelor's in Computer Science at Vrije Universiteit. My professional experience spans freelance web development, however recently I've been interested in working in large companies, being part of something bigger than myself. I prefer hybrid work and enjoy collaborating with other people.</p>
                    <p class="section-paragraph">My passion is for user experience and design, how can we balance product intuitiveness and aesthetics for a pleasant user experience. I also have a unique interest in quantified self, how we can improve ourselves through data, where I'm growing a app that helps us track our productivity and unproductivity.</p>
                </div>
            </section>

            <section class="section">
                <h3 class="section-title">Education</h3>
                <div class="section-images">
                    <div class="education">
                        <nuxt-img src="/education/asw.svg" class="education-image" />
                        <p class="education-duration">2013 - 2024</p>
                    </div>
                    <div class="education">
                        <nuxt-img src="/education/vrije.svg" class="education-image" />
                        <p class="education-duration">2024 - Present</p>
                    </div>
                </div>
            </section>

            <section class="section">
                <h3 class="section-title">Languages</h3>
                <div class="section-images">
                    <div class="language">
                        <nuxt-img src="/flags/us.png" class="flag" />
                        <div class="language-info">
                            <p class="language-name">English</p>
                            <p class="language-level">Native</p>
                        </div>
                    </div>
                    <div class="language">
                        <nuxt-img src="/flags/pl.png" class="flag" />
                        <div class="language-info">
                            <p class="language-name">Polish</p>
                            <p class="language-level">Native</p>
                        </div>
                    </div>
                    <div class="language">
                        <nuxt-img src="/flags/pt.png" class="flag" />
                        <div class="language-info">
                            <p class="language-name">Portuguese</p>
                            <p class="language-level">Native</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <!-- <nuxt-img src="/hero-frame.png" class="hero" /> -->
    </div>
</template>

<style lang="scss" scoped>
.page {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    width: 100%;
}

.content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 2rem;

    width: 70%;

    opacity: 0;

    animation: 1s forwards slide-from-top;
}

.section {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1rem;
}

.section-title {
    margin: 0;

    font-weight: 700;
    font-size: 1rem;
    color: white;

    &-main {
        @extend .section-title;

        font-size: 1.25rem;
    }
}

.section-paragraphs {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1.5rem;
}

.section-paragraph {
    margin: 0;

    font-size: 0.85rem;
    line-height: 180%;
    color: rgba(white, 0.5);
}

.section-images {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 4rem;
}

.education {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 0.75rem;
}

.education-image {
    height: 2.5rem;
}

.education-duration {
    margin: 0;

    font-size: 0.75rem;
    font-weight: 400;
    color: rgba(white, 0.5);
}

.language {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
}

.flag {
    height: 2.5rem;

    border-radius: 5px;
}

.language-info {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.1rem;
}

.language-name {
    margin: 0;

    font-weight: 700;
    font-size: 1rem;
    color: white;
}

.language-level {
    margin: 0;

    font-weight: 400;
    font-size: 0.75rem;
    color: rgba(white, 0.5);
}

// .hero {
//     width: 30%;
// }
</style>
