<template>
    <div class="popup-wrapper">
        <div class="popup">
            <div class="popup-title">
                {{ $t("popups.verify.title") }}
            </div>
            <div class="popup-desc">
                {{ $t("popups.verify.desc") }}
            </div>
            <button class="ok" @click="closePopup">Ok</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.popup-wrapper {
    position: fixed;

    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
    width: 100%;

    top: 0;
    left: 0;

    background-color: rgba(black, 0.5);
    z-index: 5;
}

.popup {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    width: 600px;

    padding: 1.5rem 2rem;

    border-radius: 10px;

    background-color: $background-color-1;

    @include phone-only {
        width: 90%;
    }
}

.popup-title {
    margin-bottom: 0.75rem;

    font-size: 2rem;
    font-weight: 700;
}

.popup-desc {
    width: 100%;

    margin: 0;

    font-size: 1rem;
    line-height: 160%;
    color: rgba(white, 0.3);
}

.ok {
    margin-top: 3rem;
    padding: 0.5rem 3rem;

    border: none;
    border-radius: 5px;

    font-size: 1rem;
    font-weight: 400;
    background-color: rgba($blue, 0.1);
    color: $blue;

    &:hover {
        background-color: rgba($blue, 0.15);

        cursor: pointer;
    }
}
</style>

<script setup>
const verifyPopup = useState("popupVerify")

function closePopup(e) {
    verifyPopup.value = false
}
</script>
