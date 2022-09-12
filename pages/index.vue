<template>
    <div>
        <Navbar />
        <div class="content">
            <Jumbotron />

            <Divider :title="$t('heading1')" id="skills" />

            <Skills />

            <Divider title="Showcase" id="showcase" />

            <Showcase />

            <Divider title="Contact" id="contact" />

            <Contact />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.content {
    width: 80%;
    max-width: $max-width;

    margin: 0 auto;
}
</style>

<script>
</script>