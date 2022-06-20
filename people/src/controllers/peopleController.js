const bcrypt = require('bcrypt')

const peopleController = (People) => {
    const getAllPeople = async (req, res) => {
        const { query } = req

        const response = await People.find(query)

        res.status(200).json(response)
    }

    const postPeople = async (req, res) => {
        try {
            const { body } = req
            const enncryptedPassword = await bcrypt.hash(body.password, 10)
            const enncryptedData = {
                ...body,
                password: enncryptedPassword
            }

            const people = await new People(enncryptedData)
            await people.save()

            res.status(201).json(people)
        } catch (err) {
            console.log(err.name)
            if (err.name === "MongoServerError") {
                console.log("dato repetido")
                res.status(401).send('Dato repetido, porfavor ingresar uno diferente')
            } else if (err.name === "ValidationError") {
                res.status(403).send('tenes que poner todos los datos')
            } else {
                res.status(500).send(err.menssage)
            }

        }
    }


    const getPeopleById = async (req, res) => {
        const { params } = req
        await People.findById(params.id)

        res.status(200).json(response)
    }
    const putPeopleById = async (req, res) => {
        const { params, body } = req;

        const enncryptedPassword = await bcrypt.hash(body.password, 10)

        await People.updateOne({
            _id: params.id,
        },
            {
                $set: {
                    firstName: body.firstName,
                    lastName: body.lastName,
                    username: body.username,
                    password: enncryptedPassword,
                    password2: body.password2,
                    email: body.email,
                    address: body.address,
                    phone: body.phone
                }
            })
        res.status(201).send('Data successful updated')
    }
    return { getAllPeople, getPeopleById, postPeople, putPeopleById }
}

module.exports = peopleController
