<template>
    <div class="page-header">
        <h1 class="contact-title">{{ $t("contact.title") }}</h1>
        <h2 class="contact-subtitle">{{ $t("contact.subtitle") }}</h2>
    </div>

    <div class="page-content">
        <form class="form" @submit.prevent="sendForm">
            <FormText class="form-name" :name="$t('contact.inputs.name')" placeholder="Daniel Ladeira" type="string" id="name" />
            <FormText class="form-email" :name="$t('contact.inputs.email')" placeholder="user@example.com" type="string" id="email" />
            <FormText class="form-budget" :name="$t('contact.inputs.budget')" :placeholder="$t('contact.inputs.budget_placeholder')" type="string" id="budget" />
            <FormTextArea class="form-textarea" :name="$t('contact.inputs.message')" :placeholder="$t('contact.inputs.message_placeholder')" type="string" id="message" />
            <div class="submit-row">
                <button type="submit" class="button-submit">Send <NuxtImg class="button-submit-icon" src="/icons/send.svg" height="12" alt="Send icon" /></button>
                <p class="submit-info">{{ $t("contact.send_hint") }}</p>
            </div>
        </form>
        <div class="socials">
            <Social text="dladeira" icon="/icons/github.svg" link="https://github.com/dladeira" />
            <Social text="dladeira" icon="/icons/dribbble.svg" link="https://dribbble.com/dladeira" />
            <Social text="dladeira" icon="/icons/discord.svg" />
            <Social text="Daniel" icon="/icons/overflow.svg" link="https://stackoverflow.com/users/9564834/daniel" />
            <Social text="Daniel Ladeira" icon="/icons/linkedin.svg" link="https://linkedin.com/in/dladeira" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.page-header {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.5rem;

    width: 100%;

    margin: 4rem 0;

    opacity: 0;

    animation: $animation-title-duration forwards slide-from-top;
}

.contact-title {
    margin: 0;

    font-size: 2.5rem;
    font-weight: 700;
    color: $blue;

    @include tablet-below {
        font-size: 2rem;
    }
}

.contact-subtitle {
    margin: 0;

    font-size: 1rem;
    font-weight: 400;
    color: white;
}

.page-content {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 2.5rem;

    width: 100%;
}

.form {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    grid-template-rows: 1fr;
    gap: 1.5rem;

    width: 50%;

    animation: $animation-duration forwards slide-from-top;

    @include tablet-below {
        width: 100%;
    }
}

.form-budget {
    grid-column: 1 / 3;
}

.form-textarea {
    grid-column: 1 / 3;
}

.submit-row {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 1.5rem;

    grid-column: 1 / 3;
}

.button-submit {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;

    border: none;
    border-radius: 5px;

    padding: 0.75rem 5rem;

    font-size: 1rem;
    background-color: rgba($blue, 0.1);
    color: $blue;

    transition: 200ms $transition background-color;

    &:hover {
        cursor: pointer;
        background-color: rgba($blue, 0.14);
    }

    &:active {
        background-color: rgba($blue, 0.2);
    }
}

.button-submit-icon {
    filter: $blue-filter;
}

.submit-info {
    white-space: nowrap;
    font-size: 0.85rem;
    color: rgba(white, 0.2);

    @include tablet-below {
        white-space: wrap;
        width: 100%;
    }
}

.socials {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1.5rem;

    padding-top: 1.75rem;

    opacity: 0;

    animation: $animation-duration forwards slide-from-right;

    @include tablet-below {
        display: none;
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

    const { error } = await useFetch(config.public.WEB_SERVER + "/api/msg", {
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
