<template>
    <div>
        <Navbar />
        <div class="content">
            <Jumbotron />

            <Divider :title="$t('navbar1')" id="skills" />

            <Skills />

            <Divider :title="$t('navbar2')" id="showcase" />

            <Showcase />

            <Divider :title="$t('navbar3')" id="contact" />

            <Contact />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.content {
    width: 80%;
    max-width: $max-width;

    margin: 0 auto;

    @include tablet-only {
        width: 90%;
    }
}
</style>

<script>
</script>