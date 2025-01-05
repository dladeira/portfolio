import { defineMongooseModel } from "#nuxt/mongoose"

export const Message = defineMongooseModel("Message", {
    name: {
        type: "string",
        required: true,
    },
    email: {
        type: "string",
        required: true,
    },
    budget: {
        type: "string",
        required: true,
    },
    message: {
        type: "string",
        required: true,
    },
    date: {
        type: "number",
        required: true,
    },
})
