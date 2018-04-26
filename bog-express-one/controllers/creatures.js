const express = require('express')
const router = express.Router()

const { Creature } = require('../db/schema.js')

router.get('/', (req, res) => {
    Creature.find()
        .then((creatures) => {
            res.json(creatures)
        }).catch((err) => {
            console.log(err)
        })
})

module.exports = router