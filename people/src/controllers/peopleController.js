const bcrypt = require('bcrypt')

const peopleController = (People) => {
    const getAllPeople = async (req, res) => {
        try {
            const { query } = req

            const response = await People.find(query)

            res.status(200).json(response)
        } catch (err) {
            res.status(500).send(err.name)
        }
    }

    const postPeople = async (req, res) => {
        try {
            const { body } = req

            const encryptedPassword = await bcrypt.hash(body.password, 10)

            const encryptedData = {
                ...body,
                password: encryptedPassword
            }

            const people = await new People(encryptedData)

            await people.save()

            res.status(201).json(people)
        } catch (err) {
            res.status(500).send(err.name)
        }
    }

    const putPeopleById = async (req, res) => {
        try {
            const { body, params } = req

            const checkData = await People.find({
                _id: params.id
            })

            if (checkData === null) {
                res.status(403).send('No data found with the provided ID.')
            }

            const encryptedPassword = await bcrypt.hash(body.password, 10)

            await People.updateOne(
                {
                    _id: params.id
                },
                {
                    $set: {
                        firstName: body.firstName,
                        lastName: body.lastName,
                        username: body.username,
                        password: encryptedPassword,
                        email: body.email,
                        address: body.address,
                        phone: body.phone
                    }
                }
            )

            res.status(201).send('Data successful updated')
        } catch (err) {
            res.status(500).send(err.name)
        }
    }

    const getPeopleById = async (req, res) => {
        try {
            const { params } = req

            const response = await People.findById(params.id)

            res.status(200).json(response)
        } catch (err) {
            res.status(500).send(err.name)
        }
    }

    const deletePeopleById = async (req, res) => {
        try {
            const { params } = req

            await People.findByIdAndDelete(params.id)

            res.status(202).send('Data successful deleted')
        } catch (err) {
            res.status(500).send(err.name)
        }
    }

    return {
        getAllPeople,
        getPeopleById,
        postPeople,
        putPeopleById,
        deletePeopleById
    }
}

module.exports = peopleController