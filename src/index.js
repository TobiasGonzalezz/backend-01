const express = require('express')

const Fruit = require ('./models/fruitModel')

const fruitsRouter = require('./routes/fruitsRouter')(Fruit)

require('./database/db')

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/api', fruitsRouter)

app.listen(5000, () => {
    console.log('Server is run :D')
})