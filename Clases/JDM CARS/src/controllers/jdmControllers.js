const jdmController = (Jdm) => {
    const getAllJdmCars = async (req, res, next) => {
        try {
            const { query } = req

            const response = await Jdm.find(query)

            return res.status(201).json(response)
        } catch (err) {
            next(err)
        }
    }

    const postJdmCars = async (req, res, next) => {
        try {
            const { body } = req

            const jdm = await new Jdm(body)

            await jdm.save()

            return res.status(202).json(jdm)
        } catch (err) {
            next(err)
        }
    }
    return {
        getAllJdmCars,
        postJdmCars
    }
}

module.exports = jdmController