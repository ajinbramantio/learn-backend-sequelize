const express = require('express')
const router = express.Router()
const controller = require('./controller')
router.get('/', controller.getAll)
router.post('/register', controller.register)

module.exports = router
