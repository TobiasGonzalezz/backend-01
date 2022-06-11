const mongoose = require('mongoose')

const { Schema } = mongoose

const fruitModel = new Schema(
    {
        name: { type: String, require: true},
        color: { type: String},
        size: { type: String}
    }
)

module.exports = mongoose.model('Fruit', fruitModel)