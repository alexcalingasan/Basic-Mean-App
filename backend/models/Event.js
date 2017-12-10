var mongoose = require('mongoose')

module.exports = mongoose.model('Event', {
    title: String,
    description: String,
    destination: String,
    meetUpPlace: String,
    date: Date
})