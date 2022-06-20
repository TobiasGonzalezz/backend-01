const express = require('express')
const peopleController = require ('../controllers/peopleController')
const validator = require('express-joi-validation').createValidator({})
const bodySchema = require('../validations/peopleBodyValidator')

const router = (People) => {
    const peopleRoutes = express.Router()

    const { getAllPeople, getPeopleById, postPeople, putPeopleById } = peopleController(People)

    peopleRoutes.route('/people')
    .get(getAllPeople)
    .post(validator.body(bodySchema), postPeople)

    peopleRoutes.route('/people/:id')
    .get(getPeopleById)
    .put(validator.body(bodySchema), putPeopleById)

    return peopleRoutes
}

module.exports = router
