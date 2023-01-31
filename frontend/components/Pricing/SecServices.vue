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
const { t } = useI18n()

const services = [
    {
        name: t('services.service1.name'),
        desc: t('services.service1.desc'),
        price: t('services.service1.price')
    },
    {
        name: t('services.service2.name'),
        desc: t('services.service2.desc'),
        price: t('services.service2.price')
    },
    {
        name: t('services.service3.name'),
        desc: t('services.service3.desc'),
        price: t('services.service3.price')
    },
    {
        name: t('services.service4.name'),
        desc: t('services.service4.desc'),
        price: t('services.service4.price')
    }
]
</script>