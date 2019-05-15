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
        passwordConfirmation: 'sda',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE26X-Shf8Rf-eSWvy_K5ZtnW6E3IV4WJb235y96HS3CIMAsW2RQ'
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
          date: '2019-05-17',
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
          date: '2019-05-17',
          start: '23:30',
          finish: '05:00',
          price: 12,
          description: 'Virgil Abloh makes a rare Farringdon stop-off to play Room One. Known best as the brains behind the dominant Milan fashion house Off-White, Abloh is arguably one of the world’s most influential creative minds today. With his career highlights including collaborations with Kanye West and his ongoing position shaping Louis Vuitton’s artistic direction, in recent years Abloh has begun to focus on another of his talents, DJing. Behind the decks, he typically spins supreme deep house via classic 90s records, mixed with high-energy party fare.\n Benji B also makes a special guest appearance. As both a DJ and longstanding radio host, the London artist is one of the UK’s most highly respected selectors. Over the last 15 years of his career his record collection has spanned soulful house, modern hip-hop, muddy UK bass and experimental electronica, something he showcases in his regular broadcasts and DJ appearances. As the founder of long-running club night Deviation he’s been an integral piece of the capitals electronic music landscape, introducing the city to newer artists long before they’d broken through.\n Also joining the Room One bill is Detroit artist Jay Daniel, whose deep style of house can be found on labels like Watusi High and Technicolour. Bone Soda founder and NTS Radio host Skinny Macho also lands.',
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


        },
        {

          venue: 'XOYO',
          postcode: 'E9 5LN',
          skId: '1005531',
          name: 'Bradley Zero XOYO Residency w. Mala',
          image: 'https://xoyo.co.uk/wp-content/uploads/2019/03/FB_LONG_COVER_web_banner-895x300.jpg',
          date: '2019-06-21',
          start: '22:30',
          finish: '04:00',
          price: 8,
          description: 'In our most ambitious residency ever, we welcome the multi-faceted Bradley Zero to curate 12 weeks of club nights and live shows from Friday 5th April to Friday 21st June. \n He’ll be reaching around the globe as he invites 80+ artists covering Syrian dabke to Detroit techno via Angolan kuduro, London jazz and literally everything else in between. \nWith an enormous passion for music, discovery, dancing and community, Bradley epitomises what we are looking for in our next resident. Often described as ‘the tastemaker of his generation’, Bradley’s influence on the London scene is unparalleled, and we couldn’t be more proud to become the next part of his journey. \n The world is coming to London.',
          minimumAge: 20,
          modifiedBy: user,
          createdBy: user,
          artist: [
            {
              label: 'Mala',
              value: 'Mala'
            },
            {
              label: 'Cosmic Slop',
              value: 'Cosmic Slop'
            },
            {
              label: 'Iration Steppas',
              value: 'Iration Steppas'
            },
            {
              label: 'Bradley Zero',
              value: 'Bradley Zero'
            }]


        },
        {

          venue: 'Phonox',
          postcode: 'SW9 7AY',
          skId: '3377469',
          name: 'Dj Boring',
          image: 'https://www.residentadvisor.net/images/events/flyer/2019/6/uk-0615-1253355-front.jpg',
          date: '2019-06-15',
          start: '21:30',
          finish: '04:00',
          price: 20,
          description: 'A close friend of Phonox heads up every Saturday in June, for a not so boring month of parties to dance at alongside your favourite pals.\n Boring\'s rise to the pinnacle of dance music has been through sheer dedication to his craft. Those loose house sounds and vocal samples in his own productions mixed with classics and forward-facing tracks make his sets a complete journey.\n Phonox: Any surprises to come for the residency?\nBoring: You’ll just have to come and find out.\n Phonox: Will Winona Ryder make an appearance?\nBoring: Still waiting on her RSVP.\nPhonox: What are you most looking forward to with the residency?\nBoring: I’ve had some amazing nights at Phonox. I’m looking forward to creating more of those nights and having a big boogie hopefully with some familiar faces. \nDoors for the bar open from 9:30pm, DJ starts at 10pm.',
          minimumAge: 18,
          modifiedBy: user,
          createdBy: user,
          artist: [
            {
              label: 'Dj Boring',
              value: 'Dj Boring'
            }
          ]


        },
        {

          venue: 'Mirth, Marvel & Maud',
          postcode: 'E17 4QH',
          skId: '4057204',
          name: 'Electronic 17: A Guy Called Gerald',
          image: 'https://www.residentadvisor.net/images/events/flyer/2019/6/uk-0621-1244281-front.jpg',
          date: '2019-06-21',
          start: '20:00',
          finish: '02:00',
          price: 12,
          description: 'An iconic name in dance music, A Guy Called Gerald stands out for consistent innovation, excellence and refusal to compromise. A Guy Called Gerald kick-started Europe’s acid house movement with his ’88 classic ‘Voodoo Ray’ and `Pacific State` (as a founding member of 808 State) and went on to lay down the blueprint for jungle/drum n bass. Eleven albums and 30 years of independence later, he continues to push the boundaries of electronic dance music touring worldwide bringing his "true school" flavour to a world overloaded with pop pap.\nAlthough his remixes are relatively enviable including the likes of David Bowie, Cabaret Voltaire, Black Uhuru, Finley Quaye, Lamb, Tricky and The Stone Roses, it is Gerald’s own productions and refusal to plough anyone’s furrow but his own which has marked him out. A Guy Called Gerald is responsible for the birth of British dance music as you know it today and continues to explore what is possible both in the studio and in the club with his "Live in Session" performances. “',
          minimumAge: 18,
          modifiedBy: user,
          createdBy: user,
          artist: [
            {
              label: 'A Guy Called Gerald',
              value: 'A Guy Called Gerald'
            },
            {
              label: 'Kat Richmond',
              value: 'Kat Richmond'
            },
            {
              label: 'Samantha Blackburn',
              value: 'Samantha Blackburn'
            },
            {
              label: 'Future Unit',
              value: 'Future Unit'
            }

          ]


        },
        {

          venue: 'The Pickle Factory',
          postcode: ' E2 9DU',
          skId: '3095944',
          name: 'The Pickle Factory with Eris Drew & CCL All Night Long',
          image: 'https://www.residentadvisor.net/images/events/flyer/2019/6/uk-0629-1237853-front.jpg',
          date: '2019-06-29',
          start: '22:00',
          finish: '04:00',
          price: 12.50,
          description: 'Two of the brightest stars in America\'s underground play together all night long at The Pickle Factory. Guided by what she calls The Motherbeat, Eris Drew\'s sets spread love to the dance floor through the speakers. Go to lose yourself dancing, leave spiritually rejuvenated.',
          minimumAge: 18,
          modifiedBy: user,
          createdBy: user,
          artist: [
            {
              label: 'Eris Drew',
              value: 'Eris Drew'
            },
            {
              label: 'CCL',
              value: 'CCL'
            }


          ]


        },
        {

          venue: 'Camden Assembly',
          postcode: ' NW1 8AN',
          skId: '7786',
          name: 'Fabio & Grooverider presents 30 Years of Rage',
          image: 'https://www.residentadvisor.net/images/events/flyer/2019/8/uk-0802-1264769-front.jpg',
          date: '2019-08-02',
          start: '21:30',
          finish: '03:00',
          price: 10.00,
          description: 'Rage is approaching it\'s 30th anniversary. It\'s sonic and cultural legacy is still being felt today, Fabio and Groove are still shutting down raves and festivals every weekend all over the world with their superior DJ sets and musical knowledge guided by their pioneering spirit.',
          minimumAge: 18,
          modifiedBy: user,
          createdBy: user,
          artist: [
            {
              label: 'Fabio',
              value: 'Fabio'
            },
            {
              label: 'Grooverider',
              value: 'Grooverider'
            }


          ]


        },
        {

          venue: 'Electrowerkz',
          postcode: 'EC1V 1NQ;',
          skId: '3466',
          name: 'Gaika',
          image: 'https://www.residentadvisor.net/images/events/flyer/2019/5/uk-0523-1229237-1290617-front.jpg',
          date: '2019-08-02',
          start: '20:00',
          finish: '23:00',
          price: 12.50,
          description: 'GAIKA has never done things in halves. Once part of Manchester rap crew Murkage, the Brixton-born rapper and producer has carved out a unique space for himself in music. 2018’s debut album ‘Basic Volume’ saw him flex his dancehall roots through a turbine of industrial electronics, arresting vocals and hard-hitting lyrics about identity and the bleak landscape of world politics.',
          minimumAge: 18,
          modifiedBy: user,
          createdBy: user,
          artist: [
            {
              label: 'Gaika',
              value: 'Gaika'
            }

          ]


        }
      ])
    })
    .then(() => mongoose.connection.close()) // disconnect from the database
    .catch(err => {
      console.log(err) // log any errors
      mongoose.connection.close() // disconnect from the database
    })
})
