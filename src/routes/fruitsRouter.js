const express = require('express')
const Fruit = require('../models/fruitModel')

const router = () => {
    const fruitsRouter = express.Router()
    fruitsRouter.route('/fruits').get(async(req, res) => {

        const { query } = req

        const response = await Fruit.find(query)

        res.status(200).json(response)
    })

    fruitsRouter.route('/fruits/:id').get(async(req, res) => {
        const { params } = req

        const response = await Fruit.findById(params.id)

        res.status(200).json(response)
    })

    return fruitsRouter
}

module.exports = router()