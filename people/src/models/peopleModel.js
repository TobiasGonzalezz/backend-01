const mongoose = require('mongoose')

const { Schema } = mongoose

const peopleModel = new Schema({
    firstName: { type: String, required: true, minlength: 3, maxlength: 30 },
    lastName: { type: String, required: true, minlength: 3, maxlength: 30 },
    userName: { type: String, required: true, minlength: 3, maxlength: 30, unique: true },
    password: { type: String, required: true },
    password2: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    phone: { type: Number, required: true, unique: true }
})

module.exports = mongoose.model('People', peopleModel)