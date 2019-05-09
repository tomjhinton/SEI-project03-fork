const mongoose = require('mongoose')
const {dbUri} =require('./config/environment')
const User = require('./models/User')
const Event = require('./models/Event')

// Connect database 2
mongoose.connect(dbUri,(err,db) =>{
  db.dropDatabase()
    .then(()=>{
      return User.create({
        username: 'alikurtulus',
        email: 'alikurtulus-92@hotmai.com',
        password: 'sda',
        passwordConfirmation: 'sda'

      })
    })

    .then( user =>{
      return Event.create({
        name: 'Summer Party',
        venue: 'Lorem, EC1 2DP',
        date: new Date('2019-06-22T18:00:00'),
        image: 'https://www.stonewall.org.uk/sites/default/files/summer_party_2018_webepage_1000x550_0.png',
        artist: ['Drake', 'MC Stu'],
        price: 30,
        description: 'Summer party Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        minimumAge: 18,
        modifiedBy: user,
        createdBy: user
      })
    })

    .then(() => mongoose.connection.close()) // disconnect from the database
    .catch(err => {
      console.log(err) // log any errors
      mongoose.connection.close() // disconnect from the database
    })
})
