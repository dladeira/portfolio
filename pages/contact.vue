<template>
    <div>
        <div class="page-header">
            <h1 class="contact-title">Interested in what you see?</h1>
            <h2 class="contact-subtitle">Feel free to send me a message</h2>
        </div>

        <div class="page-content">
            <form class="form" @submit.prevent="sendForm">
                <FormText class="form-name" name="Name" placeholder="Daniel Ladeira" type="string" id="name" :disabled="messageSent" />
                <FormText class="form-email" name="Email" placeholder="user@example.com" type="email" id="email" :disabled="messageSent" />
                <FormTextArea class="form-textarea" name="Message" placeholder="Describe what you want" type="string" id="message" :disabled="messageSent" />
                <div class="submit-row">
                    <button type="submit" class="button-submit" :disabled="messageSent">Send <NuxtImg class="button-submit-icon" src="/icons/send.svg" height="12" alt="Send icon" /></button>
                    <p class="submit-info">{{ messageSent ? "Message sent! I will get back to you within 48 hours" : "" }}</p>
                </div>
            </form>
            <div class="socials">
                <Social text="dladeira" icon="/icons/github.svg" link="https://github.com/dladeira" />
                <Social text="dladeira" icon="/icons/discord.svg" />
                <Social text="Daniel Ladeira" icon="/icons/linkedin.svg" link="https://linkedin.com/in/dladeira" />
            </div>
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

    margin: 4rem 0 2.5rem;

    opacity: 0;

    animation: $animation-title-duration forwards slide-from-top;
}

.contact-title {
    margin: 0;

    font-size: 2.5rem;
    font-weight: 700;
    color: white;

    @include tablet-below {
        font-size: 2rem;
    }
}

.contact-subtitle {
    margin: 0;

    font-size: 1rem;
    font-weight: 400;
    color: rgba(white, 0.5);
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

    width: 55%;

    animation: $animation-duration forwards slide-from-top;

    @include tablet-below {
        width: 100%;
    }
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

    padding: 0.75rem 6rem;

    font-size: 1rem;
    background-color: rgba($blue, 0.1);
    color: $blue;

    transition: 200ms $transition background-color;

    &:hover:not(:disabled) {
        cursor: pointer;
        background-color: rgba($blue, 0.14);
    }

    &:active:not(:disabled) {
        background-color: rgba($blue, 0.2);
    }

    &:disabled {
        opacity: 0.7;
    }
}

.button-submit-icon {
    height: 0.85rem;
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
const messageSent = ref(false)

async function sendForm(e) {
    const { error } = await useFetch("/api/send-message", {
        method: "POST",
        body: {
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value,
        },
    })

    if (error.value) {
        console.log(error.value)
        return
    }

    messageSent.value = true

    setTimeout(() => {
        messageSent.value = false
        e.target.reset()
    }, 5000)
}
</script>
