const express = require('express')
const jdmController = require('../controllers/jdmControllers')
const validator = require('express-joi-validation').createValidator({})
const querySchema = require('../validations/validationsJDM/queryValidator')
const bodySchema = require('../validations/validationsJDM/bodyValidator')
const paramsSchema = require('../validations/validationsJDM/idValidator')
const bodyIdSchema = require('../validations/validationsJDM/bodyValidatorById')

const routes = (Car) => {
    const jdmRouter = express.Router()

    const { getAllJdmCars, postJdmCars, getJdmCarsById, putJdmCarsById, deleteJdmCarsById} = jdmController(Car)

    jdmRouter
    .route('/jdm')
    .get(validator.query(querySchema), getAllJdmCars)
    .post(validator.body(bodySchema), postJdmCars)

    jdmRouter
    .route('/jdm/:id')
    .get(validator.params(paramsSchema), getJdmCarsById)
    .put(validator.body(bodyIdSchema), putJdmCarsById)
    .delete(validator.params(paramsSchema), deleteJdmCarsById)

    return jdmRouter
}
module.exports = routes