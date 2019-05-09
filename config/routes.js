const router = require('express').Router()

const eventsController = require('../controllers/events')

router.get('/events', eventsController.indexRoute)
router.get('/events/:id', eventsController.showRoute)

router.get('/', (req, res) => res.json({ message: 'Welcome to the Events API' }))
module.exports = router
