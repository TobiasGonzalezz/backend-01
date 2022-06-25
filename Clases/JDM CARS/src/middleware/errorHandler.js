const httpStatus = require('../helpers/httpStatus')

const ERROR_HANDLERS = {
    MongoServerError: (res, err) => {
        res
        .status(httpStatus.BAD_REQUEST)
        .send({error: err.name, cause: err.message, message: 'Ya existe informacion sobre este modelo de auto, intenta con uno nuevo' })
    },
    SyntaxError:  (res, err) => {
        res
        .status(httpStatus.BAD_REQUEST)
        .send({error: err.name, cause: err.message, message: 'Error de tipado, porfavor revisar los datos' })
    },
    ValidationError: (res, err) => {
        res
        .status(httpStatus.BAD_REQUEST)
        .send({error: err.name, cause: err.message, message: 'Los datos que ingresastes son inexistentes o superan el maximo de caracteres, porfavor revisar tipeo' })
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