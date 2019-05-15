const Event = require('../models/Event')

function indexRoute(req, res, next) {
  Event.find()
    .then(resorts => res.json(resorts))
    .catch(next)
}

function showRoute(req, res, next) {
  Event.findById(req.params.id)
    .populate('createdBy')
    .then(resort => res.json(resort))
    .catch(next)
}

function createRoute(req, res, next) {
  req.body.createdBy = req.currentUser
  Event.create(req.body)
    .then(event => res.status(201).json(event))
    .catch(next)
}

function updateRoute(req, res, next) {
  req.body.modifiedBy = req.currentUser
  Event.findById(req.params.id)
    .then(event => event.set(req.body))
    .then(event => event.save())
    .then(event => res.json(event))
    .catch(next)
}

function deleteRoute(req, res, next) {
  Event.findById(req.params.id)
    .then(event => event.remove())
    .then(() => res.sendStatus(204))
    .catch(err => res.status(422).json(err))
    .catch(next)
}

module.exports = {
  index: indexRoute,
  show: showRoute,
  create: createRoute,
  update: updateRoute,
  delete: deleteRoute
}
