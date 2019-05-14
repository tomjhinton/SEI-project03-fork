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
      return Event.create([
        {

          venue: 'Studio 9294',
          postcode: 'E9 5LN',
          skId: '4052004',
          name: 'Sc&p Live: 10 Years of Posh Isolation',
          image: 'https://afterdark.co/uploads/events/7174c8c3c82b8497fb048fc119b25bea',
          date: '2019-05-17T23:00:00.000Z',
          start: '19:30',
          finish: '23:59',
          price: 12,
          description: 'The Danish experimental label Posh Isolation marks ten years with a London showcase featuring some of its key live acts.',
          minimumAge: 18,
          modifiedBy: user,
          createdBy: user,
          artist: [
            {
              label: 'Croatian Amor',
              value: 'Croatian Amor'
            },
            {
              label: 'Kyo',
              value: 'Kyo'
            },
            {
              label: 'Vanity Productions',
              value: 'Vanity Productions'
            },
            {
              label: 'Scandanavian Star',
              value: 'Scandanavian Star'
            }]


        },
        {

          venue: 'fabric',
          postcode: 'EC1M 3HN',
          skId: '8850',
          name: 'F0RMS',
          image: 'https://www.fabriclondon.com/images/listings/events/thumbs/300-1773.jpg?v=20190514',
          date: '2019-05-17T23:00:00.000Z',
          start: '23:30',
          finish: '05:00',
          price: 12,
          description: 'Virgil Abloh makes a rare Farringdon stop-off to play Room One. Known best as the brains behind the dominant Milan fashion house Off-White, Abloh is arguably one of the world’s most influential creative minds today. With his career highlights including collaborations with Kanye West and his ongoing position shaping Louis Vuitton’s artistic direction, in recent years Abloh has begun to focus on another of his talents, DJing. Behind the decks, he typically spins supreme deep house via classic 90s records, mixed with high-energy party fare. Benji B also makes a special guest appearance. As both a DJ and longstanding radio host, the London artist is one of the UK’s most highly respected selectors. Over the last 15 years of his career his record collection has spanned soulful house, modern hip-hop, muddy UK bass and experimental electronica, something he showcases in his regular broadcasts and DJ appearances. As the founder of long-running club night Deviation he’s been an integral piece of the capitals electronic music landscape, introducing the city to newer artists long before they’d broken through. Also joining the Room One bill is Detroit artist Jay Daniel, whose deep style of house can be found on labels like Watusi High and Technicolour. Bone Soda founder and NTS Radio host Skinny Macho also lands.',
          minimumAge: 19,
          modifiedBy: user,
          createdBy: user,
          artist: [
            {
              label: 'Virgil Abloh',
              value: 'Virgil Abloh'
            },
            {
              label: 'Benji B',
              value: 'Benji B'
            },
            {
              label: 'Jay Daniel',
              value: 'Jay Daniel'
            },
            {
              label: 'Skinny Macho',
              value: 'Skinny Macho'
            }]


        }
      ])
    })
    .then(() => mongoose.connection.close()) // disconnect from the database
    .catch(err => {
      console.log(err) // log any errors
      mongoose.connection.close() // disconnect from the database
    })
})
