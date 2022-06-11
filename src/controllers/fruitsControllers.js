const fruitsControllers = (Fruit) => {

    const getAllFruits = async (req, res) => {
        const { query } = req

        const response = await Fruit.find(query)

        res.status(200).json(response)
    }


    const postFruit = async (req, res) => {
        const {body} = req

        const fruit = await new Fruit(body)
        await fruit.save()
        res.status(201).json(fruit)
    }


    const getFruitsById = async (req, res) => {
        const { params } = req

        const response = await Fruit.findById(params.id)

        res.status(200).json(response)
    }
    return { getAllFruits, getFruitsById, postFruit }
}

module.exports = fruitsControllers