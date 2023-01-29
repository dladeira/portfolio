<template>
    <div class="container">
        <div class="content">
            <div class="title">Contact me</div>
            <form class="form" @submit.prevent="sendForm">
                <div class="top">
                    <ContactInputText name="Name" id="name" type="text" placeholder="Daniel Ladeira" :disabled="messageSent" />
                    <ContactInputText name="Email" id="email" type="email" placeholder="user@example.com" :disabled="messageSent" />
                    <ContactInputText name="Budget" id="budget" type="number" placeholder="$100" :disabled="messageSent" />
                </div>
                <div class="mid">
                    <ContactInputTextArea name="Message" id="message" placeholder="Describe what you want" :disabled="messageSent" />
                </div>
                <div class="bot">
                    <button type="submit" class="send" :disabled="messageSent">Send</button>
                    <div class="msg">A confirmation message will be sent to your email to verify ownership</div>
                </div>
            </form>
        </div>
        <ContactPopup v-if="contactPopup" />
    </div>
</template>

<style lang="scss" scoped>
.container {
    padding: 4rem 0;

    background-color: #fbfbfb;
}

.content {
    width: 1150px;

    margin: 0 auto;
}

.title {
    width: fit-content;

    margin: 0 auto 3rem;

    font-size: 2rem;
    font-weight: 700;
}

.form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 2rem 4rem;

    background-color: white;

    box-shadow: 0 0 4px 0 rgba(black, 0.25);
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
}

.bot {
    justify-content: flex-start;

    margin-bottom: 0;
}

.send {
    margin-right: 2rem;
    padding: 0.75rem 2.75rem;

    border: none;

    font-size: 1.25rem;
    font-weight: 400;
    background-color: $blue;
    color: white;

    &:hover {
        background-color: darken($blue, 5);

        cursor: pointer;
    }

    &:disabled {
        background-color: lighten($blue, 30);
        &:hover {
        background-color: lighten($blue, 30);

            cursor: default;
        }
    }
}

.msg {
    color: rgba($gray, 0.5);

    user-select: none;

    &:hover {
        cursor: default;
    }
}
</style>

<script setup>
const contactPopup = useState('contactPopup', () => false)
const messageSent = useState('messageSent', () => false)

function sendForm(e) {
    contactPopup.value = true
    messageSent.value = true
}
</script>