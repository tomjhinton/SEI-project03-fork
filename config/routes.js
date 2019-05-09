const router = require('express').Router()

const eventsController = require('../controllers/events')

router.get('/events', eventsController.index)
router.get('/events/:id', eventsController.show)
router.post('/events', eventsController.create)
router.delete('/events/:id', eventsController.delete)

router.get('/', (req, res) => res.json({ message: 'Welcome to the Events' }))

module.exports = router
