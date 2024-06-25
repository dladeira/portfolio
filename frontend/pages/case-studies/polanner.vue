<template>
    <div class="page">
        <div class="header">
            <div class="header-text">
                <h1 class="title">Polanner Case Study</h1>
                <h2 class="duration">January 2024 - Present</h2>
            </div>
            <div class="header-tags">
                <div class="header-tag">Nuxt</div>
                <div class="header-tag">MongoDB</div>
                <div class="header-tag">Jest</div>
                <div class="header-tag">Tauri</div>
                <div class="header-tag">ChatGPT</div>
                <div class="header-tag">Figma</div>
            </div>
        </div>

        <div class="content">
            <div class="block">
                <h3 class="block-title">A Self Improvement App</h3>
                <p class="block-paragraph">Polanner is an advanced automatic time-tracking application designed to optimize your productivity by providing a comprehensive weekly overview of your activities. Polanner tracks your productive and unproductive periods throughout the day, giving you valuable insights into your daily habits. By offering a holistic view of your life, Polanner enables you to easily identify which parts of the day you are most productive and monitor any improvements or declines in your productivity levels.</p>
                <p class="block-paragraph">The key feature of Polanner is its ability to automatically track your activities without requiring manual input. Users only need to verify the accuracy of the tracked data once a while, to make sure everything is running correctly. This automation ensures that you can focus on your tasks without the distraction of manual logging. Additionally, Polanner is fully customizable, allowing you to tailor the categorization of activities to match your personal schedule and preferences. This flexibility ensures the app fits seamlessly into the way you plan and manage your life.</p>
            </div>
            <div class="block">
                <h3 class="block-title">Branding And Colors</h3>
                <p class="block-paragraph">The design philosophy of Polanner embraces a modern and clean aesthetic, utilizing a light-mode color scheme predominantly featuring a subtle shade of blue. This primary color choice is complemented by vibrant shades of other colors to distinctly differentiate various tasks, though these are used sparingly to avoid visual clutter. Different shades of gray are strategically employed to prioritize or de-emphasize specific text elements, ensuring that the most relevant information stands out to the user. To further enhance the clean and pleasant visual experience, round edges are used consistently throughout the interface, adding a touch of softness and modernity.</p>
                <p class="block-paragraph">The app employs the Inter font, chosen for its professional and minimalistic appearance, enhancing the overall clean look of the interface. Font sizes are intentionally kept small to maintain the minimalist design ethos and to direct user attention towards the content rather than the text itself. Icons play a significant role in supplementing the textual information, particularly in displaying activities. This icon usage allows users to quickly comprehend and analyze their daily activities at a glance, contributing to an intuitive and visually appealing user experience.</p>
                <div class="block-carousel">
                    <div class="block-carousel-item">
                        <h4 class="block-carousel-item-title">Logo</h4>
                        <nuxt-img src="/case-studies/polanner/logo.svg" class="block-carousel-item-brand" />
                    </div>
                    <div class="block-carousel-item">
                        <h4 class="block-carousel-item-title">Font</h4>
                        <div class="block-carousel-item-font"><strong>Inter</strong> <i>Inter</i></div>
                    </div>
                    <div class="block-carousel-item">
                        <h4 class="block-carousel-item-title">Primary Colors</h4>
                        <div class="block-carousel-item-colors">
                            <div class="block-carousel-item-color-1-1" />
                            <div class="block-carousel-item-color-1-2" />
                            <div class="block-carousel-item-color-1-3" />
                            <div class="block-carousel-item-color-1-4" />
                            <div class="block-carousel-item-color-1-5" />
                        </div>
                    </div>
                    <div class="block-carousel-item">
                        <h4 class="block-carousel-item-title">Secondary Colors</h4>
                        <div class="block-carousel-item-colors">
                            <div class="block-carousel-item-color-2-1" />
                            <div class="block-carousel-item-color-2-2" />
                            <div class="block-carousel-item-color-2-3" />
                            <div class="block-carousel-item-color-2-4" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="block">
                <h3 class="block-title">Initial Design</h3>
                <div class="block-image-half-container">
                    <CaseStudyImage src="/case-studies/polanner/initial-overview.png" alt="Initial Overview" />
                    <CaseStudyImage src="/case-studies/polanner/initial-schedule.png" alt="Initial Schedule" />
                </div>
            </div>

            <div class="block">
                <h3 class="block-title">Final Product</h3>
                <div class="block-image-half-container">
                    <CaseStudyImage src="/case-studies/polanner/final-overview.png" alt="Final Overview" />
                    <CaseStudyImage src="/case-studies/polanner/final-schedule.png" alt="Final Schedule" />
                </div>
                <p class="block-paragraph">The initial design of the website was crafted using a versatile prototyping tool called "Figma." The first iteration aimed to present as much useful information to the user as possible. This version featured an array of icons at the top of the screen, displaying notifications, settings, and support options, along with a vertical, icon-only navigation bar on the left side. Through various iterations, a more refined version of the navigation bar was developed. The improved navbar featured horizontal top-level navigation that incorporated both text and icons, providing a more intuitive user experience. The "control" icons were relocated behind a settings panel, which could be accessed by touching the profile picture.</p>
                <p class="block-paragraph">The settings page itself was completely integrated into this new settings panel. The overview page was simplified to serve solely as a summary of the week, with control functions shifted to other pages, such as the schedule and settings pages. Additionally, a new "automation" page was created to assist in automating activities, clearly distinguishing it from the settings page for better user clarity and usability. Round edges continued to be a consistent design element, contributing to the overall clean and user-friendly look.</p>
            </div>

            <div class="block">
                <h3 class="block-title">Tech Stack</h3>
                <p class="block-paragraph">The tech stack implemented for the project was divided into front-end, back-end, and application layers. For the front-end, Nuxt was utilized, a meta-framework built on top of Vue.js. Nuxt takes advantage of server-side rendering to pre-render parts of the page, enhancing SEO and facilitating web crawler indexing. Once rendered, the client-side JavaScript fully hydrates the page, adding interactivity and single-page-application functionality.</p>
                <p class="block-paragraph">In the back-end, Node.js was employed along with Express to create API endpoints. Jest served as the tool for end-to-end (E2E) testing, ensuring the reliability and functionality of the system. MongoDB was selected as the database solution, with the Mongoose library acting as a driver to facilitate communication between the application and the database. The application layer featured the integration of artificial intelligence through both ChatGPT's and Google's Gemini's APIs, enabling automatic tracking capabilities.</p>
                <p class="block-paragraph">To run web applications on the desktop, a novel framework called Tauri was used. Tauri leverages a Rust-based back-end for interacting with the API server and the local computer, while the front-end utilized Nuxt.js, maintaining consistency in the stack across both the website and desktop application.</p>
            </div>

            <div class="block">
                <h3 class="block-title">Gallery</h3>
                <div class="block-image-half-container">
                    <CaseStudyImage src="/case-studies/polanner/final-landing.png" alt="Final Landing" />
                    <CaseStudyImage src="/case-studies/polanner/final-overview.png" alt="Final Overview" />
                </div>
                <div class="block-image-half-container">
                    <CaseStudyImage src="/case-studies/polanner/final-schedule.png" alt="Final Schedule" />
                    <CaseStudyImage src="/case-studies/polanner/final-automation.png" alt="Final Automation" />
                </div>
                <div class="block-image-eighth-container">
                    <CaseStudyImage src="/case-studies/polanner/final-m-landing.png" alt="Final Landing" />
                    <CaseStudyImage src="/case-studies/polanner/final-m-overview.png" alt="Final Overview" />
                    <CaseStudyImage src="/case-studies/polanner/final-m-schedule.png" alt="Final Schedule" />
                    <CaseStudyImage src="/case-studies/polanner/final-m-automation.png" alt="Final Automation" />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.page {
    margin: 0 auto;
    padding: 12rem 0 3rem;

    @include resizable-width;
}

.header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    margin-bottom: 5rem;

    @include tablet-below {
        flex-direction: column;

        margin-bottom: 0;
    }
}

.header-text {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.5rem;

    @include tablet-below {
        align-items: center;
        gap: 0.5rem;
    }
}

.title {
    margin: 0;

    font-size: 3rem;
    font-weight: 700;
    color: white;

    @include tablet-below {
        text-align: center;
    }
}

.duration {
    margin: 0;

    font-size: 1.25rem;
    font-weight: 400;
    color: $blue;

    @include tablet-below {
        font-size: 1.5rem;
        text-align: center;
    }
}

.header-tags {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;

    @include tablet-below {
        display: none;
    }
}

.header-tag {
    padding: 0.75rem 1.5rem;

    font-size: 0.75rem;
    font-weight: 400;
    background-color: rgba(white, 0.1);
    color: white;
}

.content {
    margin-bottom: 3rem;
}

.block-title {
    margin: 3rem 0 0;

    font-size: 1.5rem;
    font-weight: 700;
    color: white;
}

.block-paragraph {
    margin: 1.75rem 0;

    font-size: 1rem;
    font-weight: 400;
    line-height: 160%;
    color: $gray;

    &:first-of-type {
        margin-top: 0.5rem;
    }
}

.block-carousel {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    width: 100%;

    @include tablet-below {
        flex-wrap: wrap;
        gap: 2rem 0;
    }
}

.block-carousel-item {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1.25rem;

    @include tablet-below {
        gap: 0.5rem;
    }
}

.block-carousel-item-title {
    margin: 0;

    font-size: 1rem;
    font-weight: 400;
    color: white;
}

.block-carousel-item-brand {
    height: 2rem;
}

.block-carousel-item-font {
    font-size: 2rem;
}

.block-carousel-item-colors {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;

    @include phone-only {
        gap: 0.5rem;
    }

    & div {
        height: 2rem;
        width: 2rem;

        border-radius: 10px;

        @include phone-only {
            border-radius: 5px;
        }
    }
}

.block-carousel-item-color-1-1 {
    background-color: #21afff;
}

.block-carousel-item-color-1-2 {
    background-color: #000000;
}

.block-carousel-item-color-1-3 {
    background-color: #b3b3b3;
}

.block-carousel-item-color-1-4 {
    background-color: #dadada;
}

.block-carousel-item-color-1-5 {
    background-color: #eeeeee;
}

.block-carousel-item-color-2-1 {
    background-color: #f39d00;
}

.block-carousel-item-color-2-2 {
    background-color: #d07eed;
}

.block-carousel-item-color-2-3 {
    background-color: #4873c8;
}

.block-carousel-item-color-2-4 {
    background-color: #58cc02;
}

.block-image-half-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0 1.5rem;

    @include tablet-below {
        grid-template-columns: 1fr;
    }
}

.block-image-eighth-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 0 1.5rem;

    @include tablet-below {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
}
</style>
