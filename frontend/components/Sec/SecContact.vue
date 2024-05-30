<template>
    <div class="section" id="contact">
        <Block blue>
            <h3 class="section-title">
                {{ $t("contact.header") }} <span class="section-title-shadow">{{ $t("contact.header") }}</span>
            </h3>
        </Block>

        <Block class="form-block" red>
            <form class="form" @submit.prevent="sendForm">
                <div class="top">
                    <FormText :style="{ width: '80%' }" :name="$t('contact.inputs.name')" id="name" type="text" placeholder="Daniel Ladeira" :disabled="messageSent" />
                    <FormText :style="{ width: '20%' }" :name="$t('contact.inputs.budget')" id="budget" type="text" placeholder="$200" :disabled="messageSent" />
                </div>
                <div class="top">
                    <FormText :style="{ width: '100%' }" :name="$t('contact.inputs.email')" id="email" type="email" placeholder="user@example.com" :disabled="messageSent" />
                </div>
                <div class="mid">
                    <FormTextArea :name="$t('contact.inputs.message')" id="message" :placeholder="$t('contact.inputs.message_placeholder')" :disabled="messageSent" />
                </div>
                <div class="bot">
                    <button type="submit" class="send" :disabled="messageSent">{{ $t("contact.send") }}</button>
                    <div class="msg">{{ $t("contact.send_hint") }}</div>
                </div>
            </form>
        </Block>

        <Block class="footer-block">
            <div class="footer-container">
                <div class="footer-copy">© {{ new Date().getFullYear() }} Daniel Ladeira</div>
                <div class="footer-privacy">Privacy Policy</div>
            </div>
        </Block>
    </div>
</template>

<style lang="scss" scoped>
.section {
    position: relative;

    margin: 0;

    background-color: $bg-color-2;

    @include phone-only {
        padding-top: 7rem;
    }
}

$content-width: 50%;

.form-block {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: stretch;

    width: $content-width;

    padding: 8rem 0 2rem;
}

.form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
}

.top,
.mid,
.bot {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;

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

    margin-bottom: 0;

    @include phone-only {
        flex-direction: column;

        margin-top: 2rem;
    }
}

.send {
    margin-right: 2rem;
    padding: 0.7rem 4.5rem;

    border: none;

    font-size: 1rem;
    font-weight: 400;
    background-color: $blue-btn;
    color: white;

    transition: all 200ms cubic-bezier(0.165, 0.84, 0.44, 1);

    &:hover {
        background-color: $blue-btn-hover;
        color: white;

        cursor: pointer;
    }

    &:disabled {
        opacity: 0.3;

        background-color: #007fdb;
        color: white;

        &:hover {
            cursor: default;
        }
    }

    @include phone-only {
        width: 100%;

        background-color: rgba($blue, 0.2);
        color: white;

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

.footer-block {
    width: $content-width;
}

.footer-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex: 1;

    padding: 1rem 0;

    font-size: 0.75rem;
    color: rgba(white, 0.2);
}

.footer-privacy {
    text-decoration: underline;
}
</style>

<script setup>
const verifyPopup = useState("popupVerify");
const messageSent = useState("messageSent");
const config = useRuntimeConfig();

async function sendForm(e) {
    verifyPopup.value = true;
    messageSent.value = true;

    const { error } = await useFetch(config.WEB_SERVER + "/api/msg", {
        method: "POST",
        body: {
            name: e.target.name.value,
            email: e.target.email.value,
            budget: e.target.budget.value,
            message: e.target.message.value,
        },
    });

    if (error.value) return console.log(error.value);
}
</script>
