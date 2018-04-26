require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)
mongoose.Promise = global.Promise

const { Creature } = require('./schema')

const luke = new Creature({
    name: 'Luke',
    description: "Jedi"
})
const darth = new Creature({
    name: 'Darth Vader',
    description: "Luke's Father"
})

Creature.remove({})
    .then(() => luke.save())
    .then(() => darth.save())
    .then(() => console.log('Successful Save'))
    .then(() => mongoose.connection.close())