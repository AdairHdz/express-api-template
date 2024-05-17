const mongoose = require("mongoose")

const eventSchema = new mongoose.Schema({
    name: String,
    description: String
})

module.exports = mongoose.model('Event', eventSchema)