const mongoose = require('mongoose')

const { Schema } = mongoose

const fruitModel = new Schema(
    {
        name: { type: String},
        color: { type: String},
        size: { type: String}
    }
)

module.export = mongoose.model('Fruit', fruitModel)

