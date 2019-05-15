const router = require('express').Router()
const secureRoute = require('../lib/secureRoute')
const eventsController = require('../controllers/events')
const authController = require('../controllers/auth')

router.get('/events', eventsController.index)
router.get('/events/:id', eventsController.show)
router.post('/events',secureRoute,eventsController.create)
router.put('/events/:id', secureRoute,eventsController.update)
router.delete('/events/:id', secureRoute,eventsController.delete)

router.post('/login', authController.login)
router.post('/register', authController.register)

router.get('/myprofile', secureRoute, authController.profile)

module.exports = router
