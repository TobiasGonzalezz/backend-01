const express = require('express')
const app = express()
const fruitsRouter = require('./routes/fruitsRouter')

require('./database/db')

app.use('/api', fruitsRouter)

app.listen(5000, () => {
    console.log('Server is run :D')
})