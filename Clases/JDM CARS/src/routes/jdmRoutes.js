const express = require('express')
const jdmController = require('../controllers/jdmControllers')
const validator = require('express-joi-validation').createValidator({})
const querySchema = require('../validations/queryValidator')
const bodySchema = require('../validations/bodyValidator')
const paramsSchema = require('../validations/idValidator')
const bodyIdSchema = require('../validations/bodyValidatorById')

const routes = (Car) => {
    const jdmRouter = express.Router()

    const { getAllJdmCars, postJdmCars, getJdmCarsById, putJdmCarsById, deleteJdmCarsById, postJdmCarsById } = jdmController(Car)

    jdmRouter
    .route('/jdm')
    .get(validator.query(querySchema), getAllJdmCars)
    .post(validator.body(bodySchema), postJdmCars)

    jdmRouter
    .route('/jdm/:id')
    .get(validator.params(paramsSchema), getJdmCarsById)
    .post(validator.params(bodyIdSchema),postJdmCarsById,)
    .put(validator.body(bodyIdSchema), putJdmCarsById)
    .delete(validator.params(paramsSchema), deleteJdmCarsById)

    return jdmRouter
}
module.exports = routes