<template>
    <div>
        <Navbar />

        <Floater float="left" margin="-50px" top="625px" type="blob" />
        <Floater float="left" margin="250px" top="775px" type="blob" />

        <Floater float="right" margin="-175px" top="450px" type="circle" />

        <Floater float="right" margin="-150px" top="1100px" type="blob" />

        <Floater float="left" margin="-175px" top="2000px" type="blob" />

        <Floater float="right" margin="-125px" top="2500px" type="blob" />
        <Floater float="left" margin="-160px" top="2975px" type="blob" />

        <Floater float="left" margin="-10px" top="1400px" type="triangle" degrees="10" />
        <Floater float="right" margin="150px" top="2000px" type="triangle" degrees="70" />

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