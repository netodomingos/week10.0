const { Router } = require('express')

// Controllers 
const DevController = require('./Controllers/DevController')
const SeachController = require('./Controllers/SearchController')

const routes = Router()

// Dev Routes
routes.get('/devs', DevController.index)
routes.post('/devs', DevController.create)

// Search Routes
routes.get('/search', SeachController.index)

module.exports = routes