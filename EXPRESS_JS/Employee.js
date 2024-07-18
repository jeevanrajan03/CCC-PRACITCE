const mongoose = require("mongoose")

const employSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    salary: { type: Number, required: true }
})

module.exports = mongoose.model("Employee", employSchema)