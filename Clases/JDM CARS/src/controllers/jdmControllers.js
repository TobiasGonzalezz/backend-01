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
    return {
        getAllJdmCars,
        postJdmCars
    }
}

module.exports = jdmController