<template>
    <div class="container">
        <div class="content">
            <div class="title">Pricing Estimator</div>
            <div class="estimator">
                <div class="inputs">
                    <PricingInputSlider title="1. How many pages?" :range="[1, 10]" :default="fields['pages']" id="pages" @change="updateField" />
                    <PricingInputRadio v-for="radio in radios" :id="radio.id" :default="fields[radio.id]" :title="radio.title" :help="radio.help" :values="radio.values" @change="updateField" />
                </div>
                <div class="outputs">
                    <div class="output">
                        <div class="output-label">
                            Upfront Cost
                        </div>
                        <div class="output-value upfront">
                            ~${{ getUpfront() }}
                        </div>
                    </div>
                    <div class="output">
                        <div class="output-label">
                            Monthly Cost
                        </div>
                        <div class="output-value monthly">
                            ~${{ getMonthly() }} / month
                        </div>
                    </div>
                    <div class="output">
                        <div class="output-label">
                            Project Duration
                        </div>
                        <div class="output-value duration">
                            {{ getDuration() }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    width: 100%;

    padding: 7rem 0;

    background-color: #f6f6f6;
}

.content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    width: 1100px;

    margin: 0 auto;
}

.title {
    margin-bottom: 4rem;

    font-size: 2rem;
    font-weight: 700;
}

.estimator {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;

    padding: 1.25rem 1.5rem;

    border-radius: 10px;

    background-color: white;

    box-shadow: 0 0 4px 0 rgba(black, 0.25);
}

.inputs,
.outputs {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    width: 100%;
}

.outputs {
    $gap: 5rem;

    margin-top: calc($gap / 2);
    padding-top: calc($gap / 2);

    border-top: 2px solid rgba($gray, 0.3);
}

.output {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;

    &-label {
        margin-bottom: 0.75rem;

        font-size: 1.25rem;
        font-weight: 400;
        color: black;
    }

    &-value {
        font-size: 1.75rem;
        font-weight: 700;
        color: $blue;
    }
}

.upfront {
    min-width: 7rem;

    text-align: right;
}

.monthly {
    min-width: 13rem;

    text-align: right;
}

.duration {
    min-width: 15rem;

    text-align: right;
}
</style>

<script setup>
const fields = ref({
    pages: 3,
    frontend: 'static',
    backend: 'none',
    hosting: 'none',
    updates: 'none'
})

function updateField(index, value) {
    fields.value[index] = value
}

function getUpfront() {
    const pages = fields.value.pages * 7
    const pagesMultiplier = fields.value.frontend == 'dynamic' ? 1.5 : 1
    const backend = fields.value.backend == 'basic' ? 15 : fields.value.backend == 'advanced' ? 30 : 0
    const updates = fields.value.updates == 'panel' ? 30 : 0

    const final = (pages * pagesMultiplier) + backend + updates

    return Math.round(final)
}

function getMonthly() {
    const updates = fields.value.updates == 'request' ? 10 : 0

    const hostingMultiplier = fields.value.backend == 'none' ? 1 : fields.value.backend == 'basic' ? 1.2 : 1.5
    const hosting = fields.value.hosting == 'included' ? (20 + fields.value.pages) : 0

    const final = updates + (hosting * hostingMultiplier)

    return Math.round(final)
}

function getDays() {
    const pages = fields.value.pages * 3
    const pagesMultiplier = fields.value.frontend == 'dynamic' ? 1.3 : 1

    const backend = fields.value.backend == 'basic' ? 4 : fields.value.backend == 'advanced' ? 7 : 0

    const updates = fields.value.updates == 'panel' ? 7 : 0
    const updatesMultiplier = 1 + (pages / 10)

    return Math.round((pages * pagesMultiplier) + (backend) + (updates * updatesMultiplier))
}

function getDuration() {
    const totalDays = getDays()
    var months = 0
    var days = 0

    days = totalDays % 30
    months = (totalDays - days) / 30

    const dayText = days > 1 ? 'days' : 'day'
    const monthText = months > 1 ? 'months' : 'month'

    return `${months != 0 ? `${months} ${monthText} ` : ``}${days != 0 ? `${days} ${dayText}` : ``}`
}

const radios = [
    {
        id: 'frontend',
        title: "2. Website Type",
        help: `Dynamic - Content changes depends on who is visiting (allows for users to log in)

        Static - Content is same for all visitors (no logging in or storing session data)`,
        values: [
            ["Static", "static"],
            ["Dynamic", "dynamic"]
        ]
    }, {
        id: 'backend',
        title: "3. Backend Type",
        help: `A custom communications server

        None - No communication with custom server

        Basic - Basic server (logging in and storing basic user data)

        Advanced - A optimized, secure, and complex custom server (allows using custom email servers, and complex math operations)`,
        values: [
            ["None", "none"],
            ["Basic", "basic"],
            ["Advanced", "advanced"]
        ]
    }, {
        id: 'hosting',
        title: "4. Hosting",
        help: `How the website is rendered on the internet
        
        Not included - You host the website yourself, I give you the code for everything and tell you how to set it up
        
        Included - I host the website on my servers and you don't have to worry about setting anything up (monthly cost included, calculated based on website popularity and application complexity)`,
        values: [
            ["Not included", "none"],
            ["Included", "included"]
        ]
    }, {
        id: 'updates',
        title: "5. Website Updates",
        help: `How content on the website is changed
        
        None - You make the necessary changes to the codebase yourself to change the values that you want to change

        On Request - You tell me what you want to be changed on the website and I will change it (monthly fee)

        Control Panel - I will build a dedicated control panel for administrators to make it easy for you to make large changes on the website without any coding experience (expensive and requires Basic Backend Type)`,
        values: [
            ["None", "none"],
            ["On Request", "request"],
            ["Control Panel", "panel"]
        ]
    }
]
</script>