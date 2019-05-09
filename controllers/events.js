const Event = require('./models/Event')

function indexRoute(req, res, next) {
  Event.find()
    .then(resorts => res.json(resorts))
    .catch(next)
}

function showRoute(req, res, next) {
  Event.findById(req.params.id)
    .then(resort => res.json(resort))
    .catch(next)
}

module.exports = {
  index: indexRoute,
  show: showRoute
}
