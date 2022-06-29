const mongoose = require('mongoose')

const { Schema } = mongoose

const carsModel = new Schema({
    mark: { type: String, required: true, minLength: 3,},
    model: { type: String, required: true, minLength: 3, unique:true },
    year: { type: Number, required: true, maxLength: 2022 },
    bodyWork: { type: String, required: true, minLength: 3, maxLength: 20 },
    weight: { type: String, required: true, minLength: 3, maxLength: 20 },
    enginePower: { type: String, required: true },
    traction: { type: String, required: true, minLength: 3, maxLength: 20 },
    imageUrl: {type: String, required: true}
})

module.exports = mongoose.model('Car', carsModel)
