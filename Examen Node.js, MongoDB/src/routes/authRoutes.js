const express = require('express')
const authController = require('../controllers/authController.js')
const validator = require('express-joi-validation').createValidator({})
const {bodySchema, bodyAuthSchema} = require('../validations/validationsPeople')

const router = (People) => {
    const authRouter = express.Router()

    const { logIn, register } = authController(People)

    authRouter
    .route('/auth/login')
    .post(validator.body(bodyAuthSchema), logIn)

    authRouter
    .route('/auth/register')
    .post(validator.body(bodySchema), register)

    return authRouter
}

module.exports = router