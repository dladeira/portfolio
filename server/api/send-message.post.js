import { z } from "zod"

const bodySchema = z.object({
    name: z.string().min(1).max(100),
    email: z.string().email(),
    budget: z.string().min(1).max(100),
    message: z.string().min(1).max(10000),
})

const runtimeConfig = useRuntimeConfig()
const { sendMail } = useNodeMailer()

export default defineEventHandler(async (e) => {
    const { error, data } = await readValidatedBody(e, (body) => bodySchema.safeParse(body))

    if (error)
        throw createError({
            statusCode: 400,
            statusMessage: "Invalid body",
        })

    const confirmation = new Confirmation({
        name: data.name,
        email: data.email,
        budget: data.budget,
        message: data.message,
        date: Date.now(),
    })

    const confirmLink = runtimeConfig.ORIGIN + "/api/confirm-message?code=" + confirmation._id

    await confirmation.save()

    sendMail({
        to: data.email,
        subject: "Contact Message Confirmation",
        html: `Hey ${data.name},<br/>
        <br/>
        Click <a href="${confirmLink}">here</a> to confirm your email and send your message.<br/>
        <br/>
        Name: ${data.name}<br/>
        Email: ${data.email}<br/>
        Budget: ${data.budget}<br/>
        <br/>
        Sincerely,<br/>
        Daniel Ladeira.`,
        text: `Hey ${data.name},

        Paste the following link in your browser to confirm your email and send your message.
        ${confirmLink}
        
        Sincerely,
        Daniel Ladeira`,
    })

    return data
})
