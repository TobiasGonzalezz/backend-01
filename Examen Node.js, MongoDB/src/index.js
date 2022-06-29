const express = require('express')
const People = require('./models/peopleModel')
const Car = require('./models/carsModels')
const peopleRoutes = require('./routes/peopleRoutes')(People)
const authRoutes = require('./routes/authRoutes')(People)
const jdmRoutes = require('./routes/jdmRoutes')(Car)
const errorHandler = require('./middleware/errorHandler')
const httpStatus = require('./helpers/httpStatus')
require('dotenv').config()
const { expressjwt } = require('express-jwt')

const app = express()

require('./database/db')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.all('/*',
    expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] }).unless({
            path: ['/auth/login', 'auth/register']
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

app.use('/api', peopleRoutes)
app.use('/', authRoutes)
app.use('/api', jdmRoutes)

app.use(errorHandler)

app.listen(process.env.PORT, () => {
    console.log('Server is run')
})