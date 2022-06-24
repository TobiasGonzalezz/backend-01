const express = require('express')
const People = require('./models/peopleModel')
const peopleRoutes = require('./routes/peopleRoutes')(People)
const authRoutes = require('./routes/authRoutes')(People)
const errorHandler = require('./middleware/errorHandler')
const httpStatus = require('./helpers/httpStatus')
require('dotoenv').config()
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

app.use(errorHandler)

app.listen(5000, () => {
    console.log('Server is run :D')
})