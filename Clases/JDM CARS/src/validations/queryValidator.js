const Joi = require('joi')

const querySchema = Joi.alternatives().try(
    Joi.object({
        model: Joi.string().required(),
    }),
    Joi.object({
        year: Joi.string().required(),
    }),
    Joi.object({
        bodyWork: Joi.string().required(),
    }),
    Joi.object({
        weight: Joi.string().required(),
    }),
    Joi.object({
        enginePower: Joi.string().required(),
    }),
    Joi.object({
        traction: Joi.string().required(),
    }),
    Joi.object({
        imageUrl: Joi.string().required(),
    }),
    Joi.object({})
);

module.exports = querySchema