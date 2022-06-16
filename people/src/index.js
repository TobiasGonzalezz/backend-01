const express = require('express')
const People = require ('./models/peopleModel')
const peopleRoutes = require('./routes/peopleRoutes')(People)

const app = express()

require('./database/db')

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/api', peopleRoutes)

app.listen(5000, () => {
    console.log('Server is run :D')
})