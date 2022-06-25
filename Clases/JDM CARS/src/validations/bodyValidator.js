const Joi = require('joi')

const schema = Joi.object({
    model: Joi.string().min(3).max(20).trim().required(),
    year: Joi.string().min(3).max(20).trim().required(),
    bodyWork: Joi.string().min(3).max(20).trim().required(),
    weight: Joi.string().min(3).max(20).trim().required(),
    enginePower: Joi.string().min(3).max(20).trim().required(),
    traction: Joi.string().min(3).max(20).trim().required(),
    imageUrl: Joi.string().required(),
})

module.exports = schema
