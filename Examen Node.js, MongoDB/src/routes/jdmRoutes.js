const express = require('express')
const jdmController = require('../controllers/jdmControllers')
const validator = require('express-joi-validation').createValidator({})
const { bodySchema, querySchema, paramsSchema } = require('../validations/validationsCars')

const routes = (Car) => {
    const jdmRouter = express.Router()

    const { getAllJdmCars, postJdmCars, getJdmCarsById, putJdmCarsById, deleteJdmCarsById} = jdmController(Car)

    jdmRouter
    .route('/jdm/all')
    .get(validator.query(querySchema), getAllJdmCars)

    jdmRouter
    .route('/jdm')
    .post(validator.body(bodySchema), postJdmCars)

    jdmRouter
    .route('/jdm/:id')
    .get(validator.params(paramsSchema), getJdmCarsById)
    .put(validator.body(bodySchema), putJdmCarsById)
    .delete(validator.params(paramsSchema), deleteJdmCarsById)
    return jdmRouter
}
module.exports = routes