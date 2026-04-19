<template>
    <section id="contact" class="contact-section">
        <div class="page-header">
            <h1 class="contact-title">Do You Want To Connect?</h1>
            <h2 class="contact-subtitle">Feel free to reach out and send me a message</h2>
        </div>

        <div class="page-content">
            <div class="socials">
                <Social text="dladeira" icon="/icons/github.svg" link="https://github.com/dladeira" />
                <Social text="dladeira" icon="/icons/discord.svg" />
                <Social text="Daniel Ladeira" icon="/icons/linkedin.svg" link="https://linkedin.com/in/dladeira" scale="0.96" />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.contact-section {
    scroll-margin-top: 5rem;

    width: 100%;
}

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

.socials {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1.5rem;

    opacity: 0;

    animation: $animation-duration forwards slide-from-right;
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
