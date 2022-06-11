const express = require('express')

const router = () => {
    const fruits = ['manzana', 'durazno', 'pera']
    const response = {
        status: 200,
        statusText: 'OK',
        message: 'Frutas recibidas',
        data: fruits
    }
    const fruitsRouter = express.Router()
    
    fruitsRouter.route('/fruits').get((req, res) => {
        res.status(200).json(response)
    })
    return fruitsRouter
}

module.exports = router()