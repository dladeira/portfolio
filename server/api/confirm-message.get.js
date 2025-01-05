const runtimeConfig = useRuntimeConfig()
const { sendMail } = useNodeMailer()

export default defineEventHandler(async (e) => {
    const { code } = getQuery(e)

    if (!code)
        throw createError({
            statusCode: 400,
            statusMessage: "Invalid code",
        })

    const confirmation = await Confirmation.findOne({ _id: code })

    if (!confirmation)
        throw createError({
            statusCode: 400,
            statusMessage: "Invalid code",
        })

    const msg = new Message({
        name: confirmation.name,
        email: confirmation.email,
        budget: confirmation.budget,
        message: confirmation.message,
        date: Date.now(),
    })

    await msg.save()

    sendMail({
        to: runtimeConfig.MESSAGE_EMAIL,
        subject: "Portfolio Contact Message",
        html: `
        Name: ${confirmation.name}<br/>
        Email: ${confirmation.email}<br/>
            Budget: ${confirmation.budget}<br/>
            Message: ${confirmation.message}<br/>`,
    })

    await sendRedirect(e, "/?confirm=true", 302)
})
