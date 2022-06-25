const express = require('express')
const jdmController = require('../controllers/jdmControllers')
const validator = require('express-joi-validation').createValidator({})
const querySchema = require('../validations/queryValidator')
const bodySchema = require('../validations/bodyValidator')

const routes = (Car) => {
    const jdmRouter = express.Router()

    const { getAllJdmCars, postJdmCars  } = jdmController(Car)

    jdmRouter
    .route('/jdm')
    .get(validator.query(querySchema), getAllJdmCars)
    .post(validator.body(bodySchema), postJdmCars)

    return jdmRouter
}
module.exports = routes