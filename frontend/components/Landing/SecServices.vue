<template>
    <section class="container">
        <div class="content">
            <h3 class="title">Pricing & Services</h3>
            <div class="services">
                <PricingService v-for="service in services" :name="service.name" :desc="service.desc" :price="service.price" />
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
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    width: 1100px;

    margin: 0 auto;
}

.title {
    margin: 0 0 6rem 0;

    font-size: 2rem;
    font-weight: 700;
}

.services {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    width: 100%;
}
</style>

<script setup>
const services = [
    {
        name: 'Static Website',
        desc: `A fast and reliant website with 3 pages included (more on request).

Static website means that the website looks the same for every client and no data is loaded from 3rd party software`,
        price: '20'
    }, {
        name: 'Dynamic Website',
        desc: `A compact, SEO optimized, dynamic website with 4 pages included (more on request).

Dynamic website means that content changes based on who\'s viewing it, allowing for control panels and accounts (logging in).`,
        price: '45'
    }, {
        name: 'Full Web App',
        desc: `A fully fledged and performante web application with the infrastructure in place to support a large customer base. Web hosting included and a control panel to facilitate changes.`,
        price: '160'
    }
]
</script>