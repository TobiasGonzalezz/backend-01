const mongoose = require('mongoose')
const Fruit = require('../models/fruitModel')

mongoose
.connect('mongodb://localhost/fruits')
.then(()=> console.log('Base de datos conectada'))
.catch((err)=> console.log ('no se pudo conectar a la base de datos :( '))
.then(() => Fruit.deleteMany({}))
.finally(() => Fruit.insertMany([
    {
        name: 'Manzana',
        color: 'Roja',
        size: 'Mediana'
    },
    {
        name: 'Pera',
        color: 'Verde',
        size: 'Mediana'
    },
    {
    name: 'Tomate',
    color: 'Roja',
    size: 'Pequeña'
    }
    ])
)

