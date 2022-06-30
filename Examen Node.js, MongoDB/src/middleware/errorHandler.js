const httpStatus = require('../helpers/httpStatus')

const ERROR_HANDLERS = {
    Error: (res, err) => {
        res
        .status(httpStatus.BAD_REQUEST)
        .send({error: err.name, cause: err.message, message: 'enter your data to register' })
    },
    CastError: (res, err) => {
        res
        .status(httpStatus.BAD_REQUEST)
        .send({error: err.name, cause: err.message, message: 'The ID you entered is incorrect, please enter a new one' })
    },
    MongoServerError: (res, err) => {
        res
        .status(httpStatus.BAD_REQUEST)
        .send({error: err.name, cause: err.message, message: 'There is already information about it, try with a new data' })
    },
    SyntaxError:  (res, err) => {
        res
        .status(httpStatus.BAD_REQUEST)
        .send({error: err.name, cause: err.message, message: 'typing error, please check the data' })
    },
    ValidationError: (res, err) => {
        res
        .status(httpStatus.BAD_REQUEST)
        .send({error: err.name, cause: err.message, message: 'The data you entered does not exist, data is missing or exceeds the maximum number of characters, check your writing' })
    },
    defaultError: (res, err) => {
        res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .send({error: err.name, cause: err.message})
    }
}

const errorHandler = (err, req, res, next) => {
    const handler = ERROR_HANDLERS[err.name] || ERROR_HANDLERS.defaultError
    handler(res, err)
}

module.exports = errorHandler