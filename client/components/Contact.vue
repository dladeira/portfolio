<template>
    <form @submit="onSubmit" class="container">
        <div class="text">
            <h2 class="subtitle">{{ $t("contact1") }}</h2>
            <h1 class="title">{{ $t("contact2") }}</h1>
        </div>

        <nuxt-img class="image" src="/images/profile-2.jpg" height="360" width="360" quality="100" format="webp"
            alt="Me eating a cookie" />

        <div class="form1">
            <div class="input name">
                <label class="label">{{ $t("input1") }}</label>
                <input name="name" class="select" type="text" :placeholder=" $t('placeholder1') " />
            </div>

            <div class="input email">
                <label class="label">{{ $t("input2") }}</label>
                <input name="email" class="select" type="email" placeholder="user@example.com" />
            </div>

            <div class="input budget">
                <label class="label">{{ $t("input3") }}</label>
                <input name="budget" class="select" type="number" placeholder="$100" />
            </div>

            <div class="input scale">
                <label class="label">{{ $t("input4") }}</label>
                <select name="scale" class="select" type="text">
                    <option value="small">{{ $t("option1") }}</option>
                    <option value="medium">{{ $t("option2") }}</option>
                    <option value="small">{{ $t("option3") }}</option>
                </select>
            </div>
        </div>
        <div class="form2">
            <div class="input message">
                <label class="label">{{ $t("input5") }}</label>
                <textarea name="message" class="select textarea" :placeholder=" $t('placeholder2') " />
            </div>
        </div>
        <button type="submit" :class="{ sent: sent, send: notSent }">{{ notSent ? $t("send") : $t("sent") }}</button>
    </form>
</template>

<style lang="scss" scoped>
@mixin barely-tablet {
    @media (max-width: 1275px) {
        @content;
    }
}

.container {
    display: grid;
    grid-template-rows: 150px 250px 200px 90px;
    grid-template-columns: 60% 40%;
    gap: 10px;

    margin-bottom: 100px;

    @include tablet-only {
        grid-template-rows: 120px 250px 200px 90px;
    }
}

.text {
    @include tablet-only {
        grid-column: 1 / 3;
    }
}

.subtitle {
    width: fit-content;

    margin: 0;

    font-weight: 700;
    font-size: 2.25rem;
    color: white;

    transition: transform 300ms cubic-bezier(.22, .61, .36, 1);

    &:hover {
        transform: scale(1.1);

        cursor: default;
    }

    @include tablet-only {
        margin-bottom: 10px;

        font-size: 1.75rem;
        text-align: center;
    }
}

.title {
    margin: 0;

    font-weight: 700;
    font-size: 4rem;
    color: #008BFF;

    transition: transform 300ms cubic-bezier(.22, .61, .36, 1);

    &:hover {
        transform: scale(1.1);

        cursor: default;
    }

    @include barely-tablet {
        font-size: 3.5rem;
    }

    @include tablet-only {
        font-size: 2rem;
        text-align: center;
    }
}

.image {
    grid-row: 1 / span 2;
    grid-column: 2 / 3;

    margin-top: 25px;
    margin-left: auto;
    margin-right: 20px;

    border: 8px solid white;
    border-radius: 100%;

    transition: transform 300ms cubic-bezier(.22, .61, .36, 1);

    &:hover {
        transform: scale(1.1);

        cursor: default;
    }

    @include tablet-only {
        display: none;
    }
}

.form1 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;

    @include tablet-only {
        grid-column: 1 / 3;
    }
}

.input {
    display: flex;
    flex-direction: column;
}

.label {
    width: fit-content;

    margin-left: 20px;
    margin-bottom: 10px;

    font-size: 1.5rem;
    font-weight: 700;
    color: $tertiary;

    transition: transform 300ms cubic-bezier(.22, .61, .36, 1);

    &:hover {
        transform: scale(1.2);

        cursor: default;
    }
}

.select {
    height: 60px;

    padding: 5px 15px;

    border: 2px solid #405E78;
    border-radius: 10px;

    font-size: 1.5rem;
    background-color: #334759;
    color: white;

    &:focus {
        outline: none;
    }
}

.name {
    width: 45%;
}

.email {
    width: 50%;
}

.budget {
    width: 30%;
}

.scale {
    width: 65%;
}

.form2 {
    grid-column: 1 / 3;
}

.message {
    height: 100%;
    resize: none;
}

.textarea {
    height: 100%;
    width: 100%;

    padding-top: 10px;
}

.send {
    width: 400px;

    margin-top: 30px;

    border: none;
    border-radius: 10px;

    font-size: 1.5rem;
    background-color: #60cd6bc9;
    color: rgba(255, 255, 255, 0.75);

    transition: background-color 300ms cubic-bezier(.22, .61, .36, 1);

    &:hover {
        background-color: #60cd6b;
        color: white;

        cursor: pointer;
    }

    @include tablet-only {
        grid-column: 1 / 3;
        width: 100%;
    }
}

.sent {
    @extend .send;

    background-color: #008bff;

    transition: background-color 300ms cubic-bezier(.22, .61, .36, 1);

    &:hover {
        background-color: #008bff;

        color: rgba(255, 255, 255, 0.75);
        cursor: not-allowed;
    }
}
</style>

<script>
export default {
    data: () => {
        return {
            sent: false,
            notSent: true
        }
    },
    methods: {
        async onSubmit(e) {
            e.preventDefault()

            if (this.notSent) {
                await this.$axios.post('/api/msg', {
                    message: e.target.message.value,
                    scale: e.target.scale.value,
                    budget: e.target.budget.value,
                    email: e.target.email.value,
                    name: e.target.name.value,
                })

                e.target.message.disabled = true
                e.target.scale.disabled = true
                e.target.budget.disabled = true
                e.target.email.disabled = true
                e.target.name.disabled = true

                this.sent = true
                this.notSent = false
            }
        },
        async query(e) {
            e.preventDefault()
            let data = await this.$axios.get('/api')
            console.log(data)
        }
    }
}
</script>