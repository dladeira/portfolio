const express = require('express')
const Message = require('./models/Message.js')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get("/api", (req, res) => {
    Message.find({}, (err, msgs) => {
        if (err)
            return res.status(400).json(msgs)
        res.status(200).json(msgs)
    })
})

app.post("/api/msg", async (req, res) => {
    let msg = new Message({
        name: req.body.name,
        email: req.body.email,
        budget: req.body.budget,
        scale: req.body.scale,
        message: req.body.message
    })

    await msg.save()
    res.status(200).send()
})

module.exports = app