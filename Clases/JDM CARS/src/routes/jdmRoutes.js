const express = require('express')
const jdmController = require('../controllers/jdmControllers')

const routes = (Jdm) => {
    const jdmRouter = express.Router()

    const { getAllJdmCars, postJdmCars  } = jdmController(Jdm)

    jdmRouter
    .route('/jdm')
    .get(getAllJdmCars)
    .post(postJdmCars)

    return jdmRouter
}
module.exports = routes