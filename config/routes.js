const router = require('express').Router()

const eventsController = require('../controllers/events')
const authController =require('../controllers/auth')

router.get('/events', eventsController.index)
router.get('/events/:id', eventsController.show)
router.post('/events', eventsController.create)
router.put('/events/:id', eventsController.update)
router.delete('/events/:id', eventsController.delete)

router.get('/', (req, res) => res.json({ message: 'Welcome to the Events API' }))

router.post('/login', authController.login)
router.post('/register', authController.register)



module.exports = router
