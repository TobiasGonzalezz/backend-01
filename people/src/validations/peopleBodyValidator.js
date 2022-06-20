const Joi = require('joi')

const schema = Joi.object({
    firstName: Joi.string().alphanum().min(3).max(30).trim().required(),
    lastName: Joi.string().alphanum().min(3).max(30).trim().required(),
    userName: Joi.string().min(6).max(16).required(),
    password: Joi.string().required(),
    password2: Joi.string().required(),
    email: Joi.string().email(),
    address:Joi.string().required(),
    phone: Joi.number().integer().min(9).required()
})

module.exports = schema
