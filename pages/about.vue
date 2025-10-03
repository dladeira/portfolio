<template>
    <div>
        <h1 class="page-title">About Me</h1>

        <div class="page">
            <div class="content">
                <section class="section">
                    <h2 class="section-title-main">Daniel Kazmierczak-Ladeira</h2>
                    <div class="section-paragraphs">
                        <p class="section-paragraph">My name is Daniel Kazmierczak-Ladeira and I am a Backend/DevOps developer based in Amsterdam, fluent in English, Portuguese, and Polish. My programming journey began in 2020, creating Minecraft modifications in Java, then into freelance full stack development, and now into full-time Backend/DevOps.</p>
                        <p class="section-paragraph">I'm currently working as a full-time Backend/DevOps Developer at a mid-sized Dutch startup, while pursuing my bachelor's in computer science on the side. I work best hybrid and enjoy collaborating with other people.</p>
                        <p class="section-paragraph">I'm super versed in anything JavaScript, though recently I've been expanding more into Rust and Python. As for DevOps, I'm currently deep diving into monitoring and observability (Grafana, OTEL, ClickStack) and deployment systems (Docker, Kubernetes).</p>
                    </div>
                </section>

                <section class="section">
                    <h3 class="section-title">Education</h3>
                    <div class="section-images">
                        <div class="education">
                            <NuxtImg src="/education/vrije.svg" class="education-image" alt="Vrije logo" />
                            <p class="education-duration">2024 - Present</p>
                        </div>
                    </div>
                </section>

                <section class="section">
                    <h3 class="section-title">Languages</h3>
                    <div class="section-images">
                        <div class="language">
                            <NuxtImg src="/flags/en.png" class="flag" alt="US flag" />
                            <div class="language-info">
                                <p class="language-name">English</p>
                                <p class="language-level">Native</p>
                            </div>
                        </div>
                        <div class="language">
                            <NuxtImg src="/flags/pl.png" class="flag" alt="PL flag" />
                            <div class="language-info">
                                <p class="language-name">Polish</p>
                                <p class="language-level">Native</p>
                            </div>
                        </div>
                        <div class="language">
                            <NuxtImg src="/flags/pt.png" class="flag" alt="PT flag" />
                            <div class="language-info">
                                <p class="language-name">Portuguese</p>
                                <p class="language-level">Native</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
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

    animation: $animation-duration forwards slide-from-top;

    @include tablet-below {
        width: 100%;
    }
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

    @include tablet-below {
        gap: 2rem;
    }
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

    @include tablet-below {
        font-size: 0.75rem;
    }
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
