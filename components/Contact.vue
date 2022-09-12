<template>
    <div class="container">
        <div class="text">
            <h2 class="subtitle">Send me a message</h2>
            <h1 class="title">I'll give you a cookie</h1>
        </div>

        <nuxt-img class="image" src="/images/profile-2.jpg" height="375" width="375" quality="100" />

        <div class="form1">
            <div class="input name">
                <label class="label">Name</label>
                <input class="select" type="text" placeholder="First Last" />
            </div>

            <div class="input email">
                <label class="label">Email</label>
                <input class="select" type="text" placeholder="user@example.com" />
            </div>

            <div class="input budget">
                <label class="label">Budget</label>
                <input class="select" type="text" placeholder="$100" />
            </div>

            <div class="input scale">
                <label class="label">Project Scale</label>
                <select class="select" type="text">
                    <option value="small">Small - 5 static pages</option>
                    <option value="medium">Medium - 7 dynamic pages</option>
                    <option value="small">Large - Full web application</option>
                </select>
            </div>
        </div>
        <div class="form2">
            <div class="input message">
                <label class="label">Message</label>
                <textarea class="select textarea" placeholder="Describe your project in 3-5 sentences"/>
            </div>
        </div>
        <button class="send">Send</button>
    </div>
</template>

<style lang="scss" scoped>
.container {
    display: grid;
    grid-template-rows: 150px 250px 200px 90px;
    grid-template-columns: 60% 40%;

    margin-bottom: 100px;
}

.subtitle {
    margin: 0;

    font-weight: 700;
    font-size: 2.25rem;
    color: white;
}

.title {
    margin: 0;

    font-weight: 700;
    font-size: 4rem;
    color: #008BFF;
}

.image {
    grid-row: 1 / span 2;
    grid-column: 2 / 3;

    margin-top: 25px;
    margin-left: auto;
    margin-right: 20px;

    border: 8px solid white;
    border-radius: 100%;
}

.form1 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
}

.input {
    display: flex;
    flex-direction: column;
}

.label {
    margin-left: 20px;
    margin-bottom: 10px;

    font-size: 1.5rem;
    font-weight: 700;
    color: $tertiary;
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

    &:hover {
        background-color: #60cd6b;
        color: white;

        cursor: pointer;
    }
}
</style>