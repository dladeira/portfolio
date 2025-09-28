import { z } from "zod"

const bodySchema = z.object({
    name: z.string().min(1).max(100),
    email: z.string().email(),
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

    sendMail({
        to: runtimeConfig.SMTP_TO,
        subject: "Portfolio Contact Message",
        html: `
        Name: ${data.name}<br/>
        Email: ${data.email}<br/>
        Message: ${data.message}<br/>`,
        text: `
        Name: ${data.name}
        Email: ${data.email}
        Message: ${data.message}`,
    })

    return { success: true }
})
