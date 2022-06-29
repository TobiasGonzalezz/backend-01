const Joi = require('joi')

const querySchema = Joi.alternatives().try(
    Joi.object({
        firstName: Joi.string().required(),
    }),
    Joi.object({
        lastName: Joi.string().required(),
    }),
    Joi.object({
        username: Joi.string().required(),
    }),
    Joi.object({})
);

module.exports = querySchema