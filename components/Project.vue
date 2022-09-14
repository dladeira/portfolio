<template>
    <div class="wrapper" @mouseover="isActive = true" @mouseleave="isActive = false" :class="{ 'wrapperActive': isActive }">
        <div class="container" :class="{ 'containerActive': isActive }">
            <h1 class="title">{{title}}</h1>
            <div class="triangle" />
        </div>
        <div class="expand" :class="{ 'expandShow': isActive}">
            <div class="images">
                <nuxt-img height="187" width="300" :src="image1" class="image" alt="Showcase Image 1" format="webp" />
                <nuxt-img height="187" width="300" :src="image2" class="image secondImage" alt="Showcase Image 2" format="webp" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
$expandHeight: 250px;

.wrapper {
    position: relative;

    margin: 30px 0;

    border-radius: 20px 20px 0 0;

    transition: margin 600ms cubic-bezier(.22, .61, .36, 1);

    &Active {
        margin-bottom: calc($expandHeight + 30px);
    }
}

.container {
    position: relative;
    display: flex;
    flex-direction: row;

    height: 80px;
    width: 100%;

    padding: 10px 30px;

    border-radius: 20px;

    background-color: #18405B;

    transition: background-color 300ms cubic-bezier(.22, .61, .36, 1);
    transition: all 300ms cubic-bezier(.22, .61, .36, 1);

    z-index: 5;

    &Active {
        background-color: #33739f;
    }
}

.expand {
    position: absolute;
    top: 60px;

    height: 0;
    width: 100%;

    padding-top: 0;

    transition: all 300ms cubic-bezier(.22, .61, .36, 1);

    background-color: #0D3051;

    &Show {
        height: $expandHeight;
        padding-top: 20px;
        padding-bottom: 10px;
    }
}


.container:hover {
    background-color: #26628b;
    cursor: pointer;
}

.title {
    font-size: 1.5rem;

    margin-right: auto;
}

.triangle {
    position: relative;

    margin-top: 14px;
    margin-right: 10px;

    background-color: $primary;
}

.triangle:before,
.triangle:after {
    content: '';
    position: absolute;
    background-color: inherit;
}

.triangle,
.triangle:before,
.triangle:after {
    width: 1.25rem;
    height: 1.25rem;

    border-top-right-radius: 40%;
}

.triangle {
    transform: rotate(0deg) skewX(-30deg) scale(1, .866);
}

.triangle:before {
    transform: rotate(-135deg) skewX(-45deg) scale(1.414, .707) translate(0, -50%);
}

.triangle:after {
    transform: rotate(135deg) skewY(-45deg) scale(.707, 1.414) translate(50%);
}

.images {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    height: 85%;
    width: 100%;

    margin: 20px auto;
}

.image {
    height: 100%;
    width: 300px;

    background-color: $tertiary;
}

.secondImage {
    @include tablet-only {
        display: none;
    }
}
</style>

<script>
export default {
    props: {
        title: String,
        image1: String,
        image2: String
    },
    data() {
        return {
            isActive: false
        }
    },
    methods: {
        toggleActive() {
            this.isActive = !this.isActive
        }
    }
}
</script>