const express = require("express");
const Message = require("./models/Message.js");
const app = express();
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

app.use(bodyParser.json());

let confirmations = [];

let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

app.get("/confirm/:code", async (req, res) => {
    const code = req.params.code;

    const confirmation = confirmations.find((i) => i.code == code);

    if (confirmation) {
        let msg = new Message({
            name: confirmation.body.name,
            email: confirmation.body.email,
            budget: confirmation.body.budget,
            message: confirmation.body.message,
        });

        try {
            transporter.sendMail({
                from: '"Portfolio" <portfolio@ladeira.eu>',
                to: "daniel@ladeira.eu",
                subject: "Portfolio Contact Message",
                html: `You got a new contact message,<br/>
                <br/>
            Name: ${confirmation.body.name}<br/>
            Email: ${confirmation.body.email}<br/>
            Budget: ${confirmation.body.budget}<br/>
            Message: ${confirmation.body.message}<br/>
            <br/>
            Sincerely,<br/>
            Ladeira.eu
            `,
            });
        } catch {}

        await msg.save();

        confirmations = confirmations.filter((i) => i.code != code);
        return res.redirect(process.env.WEB_SERVER + "/confirm");
    }

    return res.send("ERROR: Invalid Code");
});

app.post("/msg", async (req, res) => {
    const { name, email, budget, message } = req.body;
    let code = Math.round(Math.random() * 1000000000);
    let confirmLink = process.env.API_SERVER + "/confirm/" + code;

    confirmations.push({
        code,
        body: {
            name,
            email,
            budget,
            message,
        },
    });

    try {
        transporter.sendMail({
            from: '"Daniel Ladeira" <confirm@ladeira.eu>',
            to: req.body.email,
            subject: "Ladeira.eu Email Verification",
            html: `Hey ${req.body.name},<br/>
        <br/>
        Click <a href="${confirmLink}">here</a> to confirm your email and send your message.<br/>
        <br/>
        Name: ${req.body.name}<br/>
        Email: ${req.body.email}<br/>
        Budget: ${req.body.budget}<br/>
        <br/>
        Sincerely,<br/>
        Daniel Ladeira.`,
            text: `Hey ${req.body.name},

        Paste the following link in your browser to confirm your email and send your message.
        ${confirmLink}
        
        Sincerely,
        Daniel Ladeira`,
        });
    } catch {}

    res.status(200).json({ success: "true" });
});

module.exports = app;
