const mongoose = require('mongoose')
const Fruit = require('../models/fruitModel')

mongoose
    .connect('mongodb://localhost/fruits')
    .then(() => console.log('Base de datos conectada'))
    .catch((err) => console.log('no se pudo conectar a la base de datos :( '))

