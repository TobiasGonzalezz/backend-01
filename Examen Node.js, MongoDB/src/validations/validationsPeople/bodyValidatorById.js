const Joi = require('joi')

const schema = Joi.object({
    firstName: Joi.string().alphanum().min(3).max(30).trim(),
    lastName: Joi.string().alphanum().min(3).max(30).trim(),
    username: Joi.string().min(6).max(16),
    password: Joi.string(),
    email: Joi.string().email(),
    address: Joi.string(),
    phone: Joi.string().min(9).max(13)
})

module.exports = schema
