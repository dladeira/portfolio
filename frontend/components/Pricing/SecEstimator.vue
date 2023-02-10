<template>
    <div class="container">
        <div class="content">
            <div class="title">{{ $t('estimator.title') }}</div>
            <div class="estimator">
                <div class="inputs">
                    <PricingInputSlider :title="$t('estimator.inputs.1.question')" :range="[1, 10]"
                        :default="fields['pages']" id="pages" @change="updateField" />
                    <PricingInputRadio v-for="radio in radios" :id="radio.id" :default="fields[radio.id]"
                        :title="radio.title" :help="radio.help" :values="radio.values" @change="updateField" />
                </div>
                <div class="outputs">
                    <div class="output">
                        <div class="output-label">
                            {{ $t('estimator.output.1') }}
                        </div>
                        <div class="output-value upfront">
                            ~{{ getPrice(getUpfront()) }}
                        </div>
                    </div>
                    <div class="output">
                        <div class="output-label">
                            {{ $t('estimator.output.2') }}
                        </div>
                        <div class="output-value monthly">
                            ~{{ getPrice(getMonthly()) }} / {{ $t('month') }}
                        </div>
                    </div>
                    <div class="output">
                        <div class="output-label">
                            {{ $t('estimator.output.3') }}
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

    @include phone-only {
        padding: 5rem 0;
    }
}

.content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    width: 1100px;

    margin: 0 auto;

    @include phone-only {
        width: 90%;
    }
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

.inputs {
    flex-wrap: wrap;
}

.outputs {
    $gap: 5rem;

    margin-top: calc($gap / 2);
    padding-top: calc($gap / 2);

    border-top: 2px solid rgba($gray, 0.3);

    @include phone-only {
        flex-direction: column;
    }
}

.output {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;

    @include phone-only {
        justify-content: space-between;
        align-items: flex-start;

        width: 100%;

        margin-bottom: 1rem;
    }

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

        @include phone-only {
            font-size: 1.25rem;
        }
    }
}

.upfront {
    min-width: 8rem;

    text-align: right;

    @include phone-only {
        min-width: fit-content;
    }
}

.monthly {
    min-width: 16rem;

    text-align: right;

    @include phone-only {
        min-width: fit-content;
    }
}

.duration {
    min-width: 15rem;

    text-align: right;

    @include phone-only {
        min-width: fit-content;
    }
}

.input {
    @include phone-only {
        margin-bottom: 2rem;
    }
}
</style>

<script setup>
const { t, locale } = useI18n()

const fields = ref({
    pages: 3,
    complexity: 'basic',
    authentication: 'none',
    hosting: 'none',
    updates: 'none'
})

function updateField(index, value) {
    fields.value[index] = value
}

function getUpfront() {
    const pages = fields.value.pages * 8
    const pagesMultiplier = fields.value.complexity == 'basic' ? 1 : fields.value.complexity == 'semi' ? 1.3 : 2
    const authentication = fields.value.authentication == 'none' ? 0 : fields.value.authentication == 'email' ? 15 : 30
    const updates = fields.value.updates == 'panel' ? 30 : 0

    const final = (pages * pagesMultiplier) + authentication + updates

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

    const dayText = days > 1 ? t('days') : t('day')
    const monthText = months > 1 ? t('months') : t('month')

    return `${months != 0 ? `${months} ${monthText} ` : ``}${days != 0 ? `${days} ${dayText}` : ``}`
}

function getPrice(usd) {
    switch (locale.value) {
        case "en":
            return "$" + usd
        case "pl":
            return (usd * 4.5) + "zł"
        case "pt":
            return "€" + usd
    }
}

const radios = [
    {
        id: 'complexity',
        title: t('estimator.inputs.2.question'),
        help: t('estimator.inputs.2.question_help'),
        values: [
            [t('estimator.inputs.2.values.1'), "basic"],
            [t('estimator.inputs.2.values.2'), "semi"],
            [t('estimator.inputs.2.values.3'), "complex"]
        ]
    }, {
        id: 'authentication',
        title: t('estimator.inputs.3.question'),
        help: t('estimator.inputs.3.question_help'),
        values: [
            [t('estimator.inputs.3.values.1'), "none"],
            [t('estimator.inputs.3.values.2'), "email"],
            [t('estimator.inputs.3.values.3'), "social"]
        ],
    }, {
        id: 'hosting',
        title: t('estimator.inputs.4.question'),
        help: t('estimator.inputs.4.question_help'),
        values: [
            [t('estimator.inputs.4.values.1'), "none"],
            [t('estimator.inputs.4.values.2'), "included"]
        ]
    }, {
        id: 'updates',
        title: t('estimator.inputs.5.question'),
        help: t('estimator.inputs.5.question_help'),
        values: [
            [t('estimator.inputs.5.values.1'), "none"],
            [t('estimator.inputs.5.values.2'), "request"],
            [t('estimator.inputs.5.values.3'), "panel"]
        ]
    }
]
</script>