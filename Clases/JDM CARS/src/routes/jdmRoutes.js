const express = require('express')
const jdmController = require('../controllers/jdmControllers')

const routes = (Car) => {
    const jdmRouter = express.Router()

    const { getAllJdmCars, postJdmCars  } = jdmController(Car)

    jdmRouter
    .route('/jdm')
    .get(getAllJdmCars)
    .post(postJdmCars)

    return jdmRouter
}
module.exports = routes