<template>
    <section id="experience" class="about-me">
        <h1 class="about-me-title">Experience</h1>

        <div class="content">
            <section class="section">
                <div class="section-header">
                    <div class="section-header-left">
                        <h4 class="section-company">Fortune 500 Tech Company</h4>
                        <p class="section-position">Software Engineer</p>
                    </div>
                    <p class="section-date">May 2026 - Present</p>
                </div>
                <p class="section-paragraph">Just started.</p>
            </section>
            <section class="section">
                <div class="section-header">
                    <div class="section-header-left">
                        <h4 class="section-company">Mid-Sized Dutch Startup</h4>
                        <p class="section-position">Backend / DevOps Developer</p>
                    </div>
                    <p class="section-date">Feb 2025 - April 2026</p>
                </div>
                <p class="section-paragraph">Developed and maintained primary JavaScript backend while contributing to a secondary Python backend. Scaled observability systems to handle 100M+ monthly logs and metrics. Engineered microservices and built CI/CD pipelines and IaC migrations. Maintained full test coverage and comprehensive API documentations.</p>
            </section>
            <section class="section">
                <div class="section-header">
                    <div class="section-header-left">
                        <h4 class="section-company">Freelance</h4>
                        <p class="section-position">Full-Stack Web Developer</p>
                    </div>
                    <p class="section-date">Feb 2025 - April 2026</p>
                </div>
                <p class="section-paragraph">Collaborated with several large content creators developing multiple full-stack websites from scratch, adapting solution and tools to each client's needs. All designs, frontends, backends, deployments, and observability handled by me. Visitor figures range from a private internal tool, to over 45,000 monthly users.</p>
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

    margin-bottom: 1.5rem;
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

    width: 100%;
}

.section-paragraph {
    margin: 0;

    font-size: 0.85rem;
    line-height: 180%;
    color: rgba(white, 0.5);
}

.section-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    width: 100%;
}

.section-header-left {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.25rem;
}

.section-company {
    margin: 0;
}

.section-position {
    margin: 0;

    color: rgba(white, 0.5);
}

.section-date {
    margin: 0;

    font-size: 0.9rem;
    color: rgba(white, 0.5);
}
</style>
