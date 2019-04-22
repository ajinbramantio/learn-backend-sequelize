const express = require('express')
const router = express.Router()

const Controller = require('./controller')
router.get('/', Controller.getAll)
router.post('/register', Controller.register)

module.exports = router
