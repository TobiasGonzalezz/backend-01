const express = require('express')
const peopleController = require ('../controllers/peopleController')
const router = (People) => {
    const peopleRoutes = express.Router()

    const { getAllPeople, getPeopleById, postPeople, putPeopleById, deletePeopleById } = peopleController(People)

    peopleRoutes.route('/people').get(getAllPeople).post(postPeople)

    peopleRoutes.route('/People/:id').get(getPeopleById).put(putPeopleById)

    peopleRoutes.route('/people/:id').get(getPeopleById).delete(deletePeopleById)

    return peopleRoutes
}

module.exports = router
