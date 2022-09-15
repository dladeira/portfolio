<template>
    <div class="container" :class="{ slideLeft: this.float == 'right', slideRight: this.float == 'left' }"
        :style="getStyles()">
        <div :class="{triangle: type == 'triangle'}" :style="getTriangle()" />
    </div>
</template>

<style lang="scss" scoped>
@keyframes slideFromRight {
    0% {
        transform: translateX(-200%);
    }

    20% {
        transform: translateX(-100%);
    }

    100% {
        transform: translateX(0%);
    }
}

@keyframes slideFromLeft {
    0% {
        transform: translateX(200%);
    }

    20% {
        transform: translateX(100%);
    }

    100% {
        transform: translateX(0%);
    }
}

.container {
    position: absolute;

    background-color: #357752;

    border-radius: 1000px;

    transition: transform 300ms cubic-bezier(.22, .61, .36, 1);

    &:hover {
        transform: scale(1.1);

        cursor: default;
    }

    @include tablet-only {
        display: none;
    }
}

.slideLeft {
    animation: 900ms ease-out 0s 1 slideFromLeft;
}

.slideRight {
    animation: 900ms ease-out 0s 1 slideFromRight;
}

.triangle {
    position: relative;

    background-color: #357752;
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
    width: 6rem;
    height: 6rem;

    border-top-right-radius: 40%;
}

.triangle:before {
    transform: rotate(-135deg) skewX(-45deg) scale(1.414, .707) translate(0, -50%);
}

.triangle:after {
    transform: rotate(135deg) skewY(-45deg) scale(.707, 1.414) translate(50%);
}
</style>

<script>
export default {
    props: {
        float: String,
        margin: String,
        top: String,
        width: String,
        height: String,
        type: String,
        degrees: String
    },
    methods: {
        getStyles() {
            var styles = {}
            styles.marginTop = this.top

            styles[this.float == "left" ? "left" : "right"] = this.margin

            // if (this.float == "left") {
            //     styles.animation = "2s ease-out 0s 1 slideFromLeft"
            // } else {
            //     styles.animation = "2s ease-out 0s 1 slideFromRight"
            // }

            switch (this.type) {
                case "blob":
                    styles.height = "100px"
                    styles.width = "260px"
                    break
                case "circle":
                    styles.height = "350px"
                    styles.width = "350px"
                    break
                default:
                    styles['background-color'] = "transparent"
                    break
            }

            return styles
        },
        getTriangle() {
            if (this.type == "triangle") {
                var styles = {}
                styles.transform = "rotate(" + (this.degrees - 180) + "deg) skewX(-30deg) scale(1, .866)"

                return styles
            }
        }
    }
}
</script>