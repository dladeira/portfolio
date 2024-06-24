<template>
    <div class="section" id="contact">
        <div class="section-inner">
            <h3 class="section-title">{{ $t("contact.title") }}</h3>
            <h3 class="section-subtitle">{{ $t("contact.subtitle") }}</h3>
            <div class="content">
                <form class="form" @submit.prevent="sendForm">
                    <div class="top">
                        <FormText :name="$t('contact.inputs.name')" id="name" type="text" placeholder="Daniel Ladeira" :disabled="messageSent" />
                        <FormText :name="$t('contact.inputs.email')" id="email" type="email" placeholder="user@example.com" :disabled="messageSent" />
                        <FormText :name="$t('contact.inputs.budget')" id="budget" type="text" placeholder="$500" :disabled="messageSent" />
                    </div>
                    <div class="mid">
                        <FormTextArea :name="$t('contact.inputs.message')" id="message" :placeholder="$t('contact.inputs.message_placeholder')" :disabled="messageSent" />
                    </div>
                    <div class="bot">
                        <button type="submit" class="send" :disabled="messageSent">{{ $t("contact.send") }}</button>
                        <div class="msg">{{ $t("contact.send_hint") }}</div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.section {
    background-color: $background-color-2;

    padding: 6rem 0;
}

.section-inner {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    @include resizable-width;

    margin: 0 auto;
}

.section-title {
    margin: 0 0 0.5rem;

    font-size: 3rem;
}

.section-subtitle {
    margin: 0 0 4rem;

    font-size: 1.25rem;
    font-weight: 400;
}

.form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 0 auto;

    @include resizable-width;
}

.top,
.mid,
.bot {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    margin-bottom: 2rem;

    @include phone-only {
        margin-bottom: 0;
    }
}

.top {
    @include phone-only {
        flex-direction: column;
    }
}

.bot {
    justify-content: flex-start;
    gap: 2rem;

    margin-bottom: 0;

    @include phone-only {
        flex-direction: column;

        margin-top: 2rem;
    }
}

.send {
    padding: 1rem 6rem;

    border: none;

    font-size: 1rem;
    font-weight: 400;
    background-color: rgba($blue, 0.2);
    color: $blue;

    transition: all 200ms $transition;

    &:hover {
        cursor: pointer;
    }

    &:hover {
        background-color: rgba($blue, 0.3);
        cursor: pointer;
    }

    &:disabled {
        opacity: 0.1;

        background-color: #007fdb;
        color: white;

        &:hover {
            cursor: default;
        }
    }

    @include phone-only {
        width: 100%;

        background-color: rgba($blue, 0.2);

        margin: 0;
        padding: 0.75rem 5rem;

        font-size: 1.25rem;
    }
}

.msg {
    color: rgba(white, 0.5);

    user-select: none;

    &:hover {
        cursor: default;
    }

    @include phone-only {
        margin-top: 1.5rem;

        font-size: 1rem;
        line-height: 1.5rem;
        text-align: center;
    }
}
</style>

<script setup>
const verifyPopup = useState("popupVerify")
const messageSent = useState("messageSent")
const config = useRuntimeConfig()

async function sendForm(e) {
    verifyPopup.value = true
    messageSent.value = true

    const { error } = await useFetch(config.WEB_SERVER + "/api/msg", {
        method: "POST",
        body: {
            name: e.target.name.value,
            email: e.target.email.value,
            budget: e.target.budget.value,
            message: e.target.message.value,
        },
    })

    if (error.value) return console.log(error.value)
}
</script>
