<template>
    <section id="about" class="about-me">
        <h1 class="about-me-title">About Me</h1>

        <div class="content">
            <section class="section section-description">
                <div class="section-paragraphs">
                    <p class="section-paragraph">My name is Daniel Ladeira and I am a software engineer based in Amsterdam, fluent in English, Portuguese, and Polish.</p>
                    <p class="section-paragraph">I started programming at 14, freelancing at 16, and landed my first full-time startup role by 18. Today, at 19, I'm balancing a CS degree while working for a F500 tech company.</p>
                    <p class="section-paragraph">While I started coding very young and progressed really fast, I'm no exceptional developer. I just love what I do and pour an ungodly amount of hours into what I love.</p>
                    <p class="section-paragraph">I work best hybrid and enjoy collaborating with other people. I'm super versed in anything JavaScript and Linux. I love backend, DevOps, monitoring and observability (Grafana, OTEL, ClickStack), and deployment systems (Docker, Kubernetes).</p>
                    <p class="section-paragraph">Recently I've been expanding more into Rust, NixOS, ZFS, and taking my home lab to the next level.</p>
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
    </section>
</template>

<style lang="scss" scoped>
.about-me {
    scroll-margin-top: 5rem;

    width: 100%;
}

.about-me-title {
    @include page-title;

    margin-bottom: 1rem;
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

    &-description {
        margin-bottom: 0.5rem;
    }
}

.section-title {
    margin: 0;

    font-weight: 700;
    font-size: 1rem;
    color: white;
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

    @include tablet-below {
        height: 2rem;
        border-radius: 4px;
    }
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
</style>
