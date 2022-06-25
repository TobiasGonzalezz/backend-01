const express = require('express')
const Car = require('./models/carsModels')
const jdmRoutes = require('./routes/jdmRoutes')(Car)
const errorHandler = require('./middleware/errorHandler')

const app = express()

require('./database/db')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/api', jdmRoutes)

app.use(errorHandler)

app.listen(5000, () => {
    console.log('let the race begin')
})
