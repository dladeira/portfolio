<template>
    <div class="container">
        <div class="content">
            <div class="title">{{ $t('contact.title') }}</div>
            <form class="form" @submit.prevent="sendForm">
                <div class="top">
                    <ContactInputText :name="$t('contact.name')" id="name" type="text" placeholder="Daniel Ladeira" :disabled="messageSent" />
                    <ContactInputText :name="$t('contact.email')" id="email" type="email" placeholder="user@example.com" :disabled="messageSent" />
                    <ContactInputText :name="$t('contact.budget')" id="budget" type="number" placeholder="$100" :disabled="messageSent" />
                </div>
                <div class="mid">
                    <ContactInputTextArea :name="$t('contact.message')" id="message" :placeholder="$t('contact.message_placeholder')" :disabled="messageSent" />
                </div>
                <div class="bot">
                    <button type="submit" class="send" :disabled="messageSent">{{$t('contact.send')}}</button>
                    <div class="msg">{{ $t('contact.hint') }}</div>
                </div>
            </form>
        </div>
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
const verifyPopup = useState('popupVerify')
const messageSent = useState('messageSent')
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
            message: e.target.message.value
        }
    })

    if (error.value)
        return console.log(error.value)
}
</script>