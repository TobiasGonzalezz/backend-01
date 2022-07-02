const express = require('express')
const cors = require('cors')
const People = require('./src/models/peopleModel')
const Car = require('./src/models/carsModels')
const peopleRoutes = require('./src/routes/peopleRoutes')(People)
const authRoutes = require('./src/routes/authRoutes')(People)
const jdmRoutes = require('./src/routes/jdmRoutes')(Car)
const errorHandler = require('./src/middleware/errorHandler')
const httpStatus = require('./src/helpers/httpStatus')
require('dotenv').config()
const { expressjwt } = require('express-jwt')

const app = express()

require('./src/database/db')

app.use(cors())

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.all('/*',
    expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] }).unless({
            path: ['/auth/login', '/auth/register', '/jdm/all']
        })
)

app.use((err, _, res, next) => {
    if (err.name === 'UnauthorizedError') {
        res.status(httpStatus.UNAUTHORIZED).json({
            error: err.name,
            cause: 'Unauthorized. Missing or invalid token provided.'
        })
    } else {
        next(err)
    }
})

app.use('/api', peopleRoutes, jdmRoutes)
app.use('/', authRoutes)

app.use(errorHandler)

app.listen(process.env.PORT, () => {
    console.log('Server is run')
})
