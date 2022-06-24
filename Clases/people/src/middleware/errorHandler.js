const httpStatus = require('../helpers/httpStatus')

const ERROR_HANDLERS = {
    MongoServerError: (res, err) => {
        res
        .status(httpStatus.BAD_REQUEST)
        .send({error: err.name, cause: err.message, message: 'no podes utilizar el mismo username, email o phone' })
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