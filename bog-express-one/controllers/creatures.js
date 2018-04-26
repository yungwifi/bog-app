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

router.get('/:id', (req, res) => {
    Creature.findById(req.params.id)
        .then((creature) => {
            res.json(creature)
        })
        .catch(console.log)
})

module.exports = router