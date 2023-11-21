const mongoose = require("mongoose");

const msgSchema = new mongoose.Schema({
    name: String,
    email: String,
    budget: String,
    scale: String,
    message: String,
    date: Number,
});

const msg = mongoose.model("message", msgSchema);

module.exports = msg;
