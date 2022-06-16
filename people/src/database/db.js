const mongoose = require('mongoose')
const People = require('../models/peopleModel')

mongoose
    .connect('mongodb://localhost/people')
    .then(() => console.log('DB connected'))
    .catch((err) => console.log(err))