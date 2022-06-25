const Joi = require('joi')

const schema = Joi.object({
    mark: Joi.string().min(3).max(20).trim(),
    model: Joi.string().min(3).max(20).trim(),
    year: Joi.string().min(3).max(20).trim(),
    bodyWork: Joi.string().min(3).max(20).trim(),
    weight: Joi.string().min(3).max(20).trim(),
    enginePower: Joi.string().min(3).max(20).trim(),
    traction: Joi.string().min(3).max(20).trim(),
    imageUrl: Joi.string(),
})

module.exports = schema
