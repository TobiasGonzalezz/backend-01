const express = require('express')
const Jdm = require('./models/jdmModels')
const jdmRoutes = require('./routes/jdmRoutes')(Jdm)

const app = express()

require('./database/db')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/api', jdmRoutes)

app.listen(5000, () => {
    console.log('let the race begin')
})
