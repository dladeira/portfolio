<template>
    <div class="container">
        <div class="content">
            <div class="title">Pricing & Services</div>
            <div class="services">
                <PricingService v-for="service in services" :name="service.name" :desc="service.desc" :price="service.price" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    width: 100%;

    padding: 7rem 0;

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
    margin-bottom: 6rem;

    font-size: 2rem;
    font-weight: 700;
}

.services {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    flex-wrap: wrap;

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
        name: 'Budget Web App',
        desc: `A lightweight web application with hosting included and a control panel to facilitate changes.`,
        price: '100'
    }, {
        name: 'Full Web App',
        desc: `A fully fledged and performante web application with the infrastructure in place to support a large customer base. Web hosting included and a control panel to facilitate changes.`,
        price: '160'
    }
]
</script>