const express = require('express')
const fruitsControllers = require ('../controllers/fruitsControllers')
const router = (Fruit) => {
    const fruitsRouter = express.Router()

    const { getAllFruits, getFruitsById, postFruit } = fruitsControllers(Fruit)

    fruitsRouter.route('/fruits').get(getAllFruits).post(postFruit)

    fruitsRouter.route('/fruits/:id').get(getFruitsById)

    return fruitsRouter
}

module.exports = router
