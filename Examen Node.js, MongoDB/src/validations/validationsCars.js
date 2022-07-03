const Joi = require('joi')

const bodySchema = Joi.object({
    mark: Joi.string().min(3).trim().required(),
    model: Joi.string().min(3).trim().required(),
    year: Joi.string().min(3).max(20).trim().required(),
    bodyWork: Joi.string().min(3).max(20).trim().required(),
    weight: Joi.string().min(3).max(20).trim().required(),
    enginePower: Joi.string().min(3).max(20).trim().required(),
    traction: Joi.string().min(3).max(20).trim().required(),
    imageUrl: Joi.string().required(),
})

const paramsSchema =
    Joi.object({
        id: Joi.string().min(24).max(24).required()
    });

const querySchema = Joi.alternatives().try(
    Joi.object({
        mark: Joi.string().required(),
    }),
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
    Joi.object({})
);


module.exports = { paramsSchema, bodySchema, querySchema }