const fruitsControllers = (Fruit) => {

    const getAllFruits = async (req, res) => {
        const { query } = req

        const response = await Fruit.find(query)

        res.status(200).json(response)
    }


    const postFruit = async (req, res) => {
        try{
            const { body } = req

            const fruit = await new Fruit(body)
            await fruit.save()
            res.status(201).json(fruit)
        } catch(err){
            console.log(err.name)
            if (err.name === "MongoServerError"){
                console.log("dato repetido")

                res.status(401).send('Dato repetido, porfavor ingresar uno diferente')
            }else if(err.name === "ValidationError"){
                res.status(403).send('tenes que poner un color si o si')
            }else{
                res.status(500).send(err.menssage)
            }

        }
    }


    const getFruitsById = async (req, res) => {
        const { params } = req

        const response = await Fruit.findById(params.id)

        res.status(200).json(response)
    }
    const putFruitById = async (req, res) => {
        const { params, body } = req;
        const response = await Fruit.updateOne({
            _id: params.id,
        }, {
            $set: {
                name: body.name,
                color: body.color,
                size: body.size
            }
        })
        res.status(201).json(response)
    }
    const deleteFruitsById = async (req, res) => {
        const { params } = req

        const response = await Fruit.findByIdAndDelete(params.id)

        res.status(202).json(response)
    }
    
    return { getAllFruits, getFruitsById, postFruit, putFruitById, deleteFruitsById }
}

module.exports = fruitsControllers
