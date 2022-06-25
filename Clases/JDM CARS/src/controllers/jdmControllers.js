const httpStatus = require('../helpers/httpStatus')

const jdmController = (Car) => {
    const getAllJdmCars = async (req, res, next) => {
        try {
            const { query } = req

            const response = await Car.find(query)

            return res.status(httpStatus.OK).json(response)
        } catch (err) {
            next(err)
        }
    }

    const postJdmCars = async (req, res, next) => {
        try {
            const { body } = req

            const carJdm = await new Car(body)

            await carJdm.save()

            return res.status(httpStatus.CREATED).json(carJdm)
        } catch (err) {
            next(err)
        }
    }
    const putJdmCarsById = async (req, res, next) => {
        try {
            const { body, params } = req

            const checkData = await Car.find({
                _id: params.id
            })

            if (checkData === null) {
                return res.status(httpStatus.FORBIDDEN).send('No data found with the provided ID.')
            }

            await Car.updateOne(
                {
                    _id: params.id
                },
                {
                    $set: {
                        mark: body.mark,
                        model: body.model,
                        year: body.year,
                        bodyWork: body.bodyWork,
                        weight: body.weight,
                        traction: body.traction,
                        imageUrl: body.imageUrl
                    }
                }
            )

            return res.status(httpStatus.CREATED).send('Data successful updated')
        } catch (err) {
            next(err)
        }
    }
    const getJdmCarsById = async (req, res, next) => {
        try {
            const { params } = req

            const response = await Car.findById(params.id)

            return res.status(httpStatus.OK).json(response)
        } catch (err) {
            next(err)
        }
    }

    const postJdmCarsById = async (req, res, next) => {
        try {
            const { params } = req

            const carJdm = await new Car(params.id)

            await carJdm.save()

            return res.status(httpStatus.CREATED).json(carJdm)
        } catch (err) {
            next(err)
        }
    }

    const deleteJdmCarsById = async (req, res, next) => {
        try {
            const { params } = req

            await Car.findByIdAndDelete(params.id)

            return res.status(httpStatus.OK).send('Data successful deleted')
        } catch (err) {
            next(err)
        }
    }
    return {
        getAllJdmCars,
        postJdmCars,
        getJdmCarsById,
        postJdmCarsById,
        putJdmCarsById,
        deleteJdmCarsById
    }
}

module.exports = jdmController