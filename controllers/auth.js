const User = require('../models/User')
const jwt =require('jsonwebtoken')
const { secret } = require('../config/environment')
function registerRoute(req, res ,next){
  User.create(req.body)
    .then(()=> res.status(201).json({message: 'Registration succesful'}))
    .catch(next)
}

function loginRoute(req, res, next){

  User.findOne({email: req.body.email})
    .then(user =>{
      if(!user  || !user.isPasswordValid(req.body.password)){
        return res.status(401).json({ message: 'Unauthorized' })

      }
      const token = jwt.sign({ sub: user._id }, secret, { expiresIn: '6h' })
      // send it to the client
      res.json({ message: `Welcome to get wild, ${user.username}!`, token })
    })
    .catch(next)
}
module.exports = {
  register: registerRoute,
  login: loginRoute

}
