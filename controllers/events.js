const Event = require('../models/Event')

function indexRoute(req, res, next) {
  Event.find()
    .then(resorts => res.json(resorts))
    .catch(next)
}

function showRoute(req, res, next) {
  Event.findById(req.params.id)
    .populate('createdBy')
    .populate('comments.user')
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
function commentCreateRoute(req, res, next) {
  //  add the currentUser to the data
  req.body.user = req.currentUser // this comes from `secureRoute`
  // find the character we want to add a comment to
  Event.findById(req.params.id)
    .then(event => {
      // add a comment to the character
      event.comments.push(req.body)
      return event.save()
    })
    .then(event => res.json(event))
    .catch(next)
}

function commentDeleteRoute(req, res, next) {
  // find the character we want to delete the comment from
  Event.findById(req.params.id)
    .then(event => {
      const comment = event.comments.id(req.params.commentId) // find the comment by its ID
      comment.remove() // remove the comment
      return event.save() // save the character
    })
    .then(event => res.json(event))
    .catch(next)
}

module.exports = {
  index: indexRoute,
  show: showRoute,
  create: createRoute,
  update: updateRoute,
  delete: deleteRoute,
  commentCreate: commentCreateRoute,
  commentDelete: commentDeleteRoute
}
