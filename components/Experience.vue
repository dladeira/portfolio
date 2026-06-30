<template>
    <section id="experience" class="about-me">
        <h1 class="about-me-title">Experience</h1>

        <div class="content">
            <section class="section">
                <div class="section-header">
                    <div class="section-header-left">
                        <h4 class="section-company">
                            <span class="section-company-anonymized">Fortune 500 Tech Company</span>
                        </h4>
                        <p class="section-position">Software Engineer I</p>
                    </div>
                    <p class="section-date">May 2026 - Present</p>
                </div>
                <p class="section-paragraph">Just started</p>
            </section>
            <section class="section">
                <div class="section-header">
                    <div class="section-header-left">
                        <h4 class="section-company">
                            <span class="section-company-anonymized">Mid-Sized Dutch Startup</span>
                        </h4>
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
                    <p class="section-date">July 2023 - Jan 2025</p>
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

.section-company-anonymized {
    position: relative;
    display: inline-block;

    border-bottom: 1px dashed $gray;

    cursor: help;

    &::after {
        content: "Anonymized for privacy. Details available upon request";
        position: absolute;
        top: calc(100% + 0.5rem);
        left: 50%;

        width: max-content;
        padding: 0.25rem 0.5rem;

        border-radius: 5px;

        background-color: rgba(black, 0.8);

        font-size: 0.65rem;
        font-weight: 400;
        line-height: 150%;
        color: rgba(white, 0.9);
        text-align: center;
        white-space: nowrap;

        pointer-events: none;
        opacity: 0;
        visibility: hidden;

        transform: translateX(-50%);
        transition:
            opacity 200ms $transition,
            visibility 200ms $transition;

        z-index: 1;
    }

    &:hover::after {
        opacity: 1;
        visibility: visible;
    }
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
