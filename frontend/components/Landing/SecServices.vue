<template>
    <section class="container">
        <div class="content">
            <h3 class="title">{{ $t('services.title') }}</h3>
            <div class="services">
                <PricingService v-for="service in services" :name="service.name" :desc="service.desc"
                    :price="service.price" />
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
        name: t('services.service4.name'),
        desc: t('services.service4.desc'),
        price: t('services.service4.price')
    }
]
</script>