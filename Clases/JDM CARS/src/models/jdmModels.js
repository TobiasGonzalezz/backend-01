const mongoose = require('mongoose')

const { Schema } = mongoose

const carsModel = new Schema({
    model: { type: String, required: true, minLength: 3, maxLength: 30 },
    year: { type: String, required: true, minLength: 3, maxLength: 30 },
    hp: { type: String, required: true, minLength: 2, maxLength: 30 },
})

module.exports = mongoose.model('Car', carsModel)
