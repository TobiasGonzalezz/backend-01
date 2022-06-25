const mongoose = require('mongoose')

const { Schema } = mongoose

const carsModel = new Schema({
    model: { type: String, required: true, minLength: 3, maxLength: 20, unique:true },
    year: { type: Number, required: true, maxLength: 2022 },
    bodyWork: { type: String, required: true, minLength: 3, maxLength: 20 },
    weight: { type: String, required: true, minLength: 3, maxLength: 20 },
    enginePower: { type: String, required: true },
    traction: { type: String, required: true, minLength: 3, maxLength: 20 },
})

module.exports = mongoose.model('Car', carsModel)
