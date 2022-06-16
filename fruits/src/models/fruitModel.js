const mongoose = require('mongoose')

const { Schema } = mongoose

const fruitModel = new Schema(
    {
        name: { type: String, unique: true },
        color: { type: String, required: true },
        size: { type: String }
    }
)

module.exports = mongoose.model('Fruit', fruitModel)