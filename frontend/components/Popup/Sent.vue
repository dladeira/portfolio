<template>
    <div class="popup-wrapper">
        <div class="popup">
            <div class="popup-title">
                {{ $t("popups.confirm.title") }}
            </div>
            <div class="popup-desc">
                {{ $t("popups.confirm.desc") }}
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
    z-index: 3;
}

.popup {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    width: 600px;

    padding: 1.5rem 2rem;

    border-radius: 10px;

    background-color: #2d343c;

    @include phone-only {
        width: 90%;
    }
}

.popup-title {
    margin-bottom: 1rem;

    font-size: 2rem;
    font-weight: 700;
}

.popup-desc {
    width: 100%;

    margin-top: 1rem;

    font-size: 1.2rem;
    line-height: 1.5rem;
}

.ok {
    margin-top: 2rem;
    padding: 0.5rem 3rem;

    border: none;
    border-radius: 5px;

    font-size: 1rem;
    font-weight: 400;
    background-color: rgba($blue, 0.4);
    color: white;

    &:hover {
        background-color: rgba($blue, 1);
        color: white;

        cursor: pointer;
    }
}
</style>

<script setup>
const sentPopup = useState("popupSent");

function closePopup(e) {
    sentPopup.value = false;
}
</script>
