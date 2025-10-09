<template>
    <div>
        <h1 class="page-title">Freelance Work</h1>
        <section class="works">
            <Work v-for="work of works" :id="work.id" :website="work.website" :tags="work.tags" :type="work.type" :client="work.client" :review="work.review" :backgroundGradient="work.backgroundGradient" :stats="work.stats" />
        </section>

        <div class="review-section">
            <WorkReview v-for="review of reviews" :key="review.title" :title="review.title" :subtitle="review.subtitle" :image="review.image" :text="review.text" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.works {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 4rem;

    opacity: 0;

    animation: $animation-duration forwards slide-from-top;
}

.section {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    margin: 7rem 0;
}

.reviews-title {
    margin: 2rem 0;

    font-size: 2.5rem;
    font-weight: 700;
    color: white;

    opacity: 0;

    animation: $animation-duration forwards slide-from-top;
}

.review-section {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 4rem;

    margin: 7rem 0;

    width: 100%;

    @include tablet-below {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @include phone-only {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
}
</style>

<script setup>
const works = [
    {
        id: "gamey",
        imageHeight: 53,
        website: "https://gamey.ai",
        tags: ["Nuxt", "MongoDB", "Figma", "ElevenLabs", "AssemblyAI", "FFMPEG"],
        type: "client",
        stats: [
            {
                title: "+$2,000",
                subtitle: "Monthly Revenue",
            },
            {
                title: "+80",
                subtitle: "Registered Users",
            },
        ],
        client: {
            name: "Magic",
            tag: "310K subscribers",
            external: "https://www.youtube.com/channel/UC0KMDDerdrOGTaqk3m-kWGw",
            icon: "/people/magic.png",
        },
        review: {
            icon: "/people/magic.png",
            name: "Blake",
            tag: "Candia Studios",
            text: "Couldn't give a bigger vouch for Daniel - been screwed over by developers nearly every single time. Breath of fresh air to have got such an incredible and advanced SaaS tool. Would and will be working with him again.",
        },
        backgroundGradient: ["#1A1126", "#0E051B"],
    },
    {
        id: "hoplite",
        imageHeight: 88,
        website: "https://hoplite.gg",
        tags: ["Next.js", "Tebex", "Strapi"],
        type: "client",
        stats: [
            {
                title: "+$10,000",
                subtitle: "Monthly Revenue",
            },
            {
                title: "+45,000",
                subtitle: "Monthly Visits",
            },
            {
                title: "+15,000",
                subtitle: "Monthly Organic Searches",
            },
        ],
        client: {
            name: "SpeedSilver",
            tag: "3.5M subscribers",
            external: "https://www.youtube.com/@SpeedSilver",
            icon: "/people/speedsilver.png",
        },
        review: {
            icon: "/people/marbar.png",
            name: "Marbar",
            tag: "Operations @ HopliteNetwork",
            text: "Daniel is an exceptional developer who consistently delivers high-quality work. He is reliable and completes work well before the deadline, and often on short notice as well. I highly recommend him!",
        },
        backgroundGradient: ["#272124", "#503D2F"],
    },
    {
        id: "infracharm",
        imageHeight: 33,
        website: "https://infracharm.com",
        tags: ["Nuxt", "Figma"],
        type: "client",
        stats: [
            {
                title: "+100",
                subtitle: "Acquired Clients",
            },
        ],
        client: {
            name: "InfraCharm",
            icon: "/people/infracharm.png",
        },
        review: {
            icon: "/people/infracharm.png",
            name: "Jared",
            tag: "Owner @ Infracharm",
            text: "[Daniel] completed web development services for me. Website came out great and they were quick to make the required changes. Great!",
        },
        backgroundGradient: ["#934A97", "#730F23"],
    },
    {
        id: "polanner",
        imageHeight: 48,
        website: "https://polanner.com",
        tags: ["Nuxt", "Figma", "MongoDB", "Electron", "ChatGPT"],
        type: "startup",
        backgroundGradient: ["#00B2FF", "#006B99"],
    },
]

const reviews = [
    {
        title: "KH",
        subtitle: "AstraNode",
        image: "/people/kh.png",
        text: "[Daniel] is a great designer with exceptional communication skills which resulted in a smooth and efficient commission process, from the initial call to delivery, he was there to answer any queries or makes changes to our liking.",
    },
    {
        title: "Spaceley",
        subtitle: "SpaceyDevs",
        image: "/people/spaceley.png",
        text: "[Daniel] has designed and developed a website for me that looks great! They also gave me clear instructions on how to install/run the website. Good service, no complaints from me.",
    },
    {
        title: "Adnrl",
        subtitle: "TropicMC",
        image: "/people/adnrl.png",
        text: "The website is absolutely amazing, I am pretty new to websites, and couldn't get it figured out. But [Daniel] helped me get the website up and running, and I love it so much. I would definitely recommend him to anybody.",
    },
]
</script>
