const express = require('express')
const bodyParser = require('body-parser') // this comes with express
const mongoose = require('mongoose')
const routes = require('./config/routes')
const errorHandler = require('./lib/errorHandler')
const { port, dbUri } = require('./config/environment')

mongoose.connect(dbUri)
const app = express()

app.use(express.static(`${__dirname}/dist`))

app.use(bodyParser.json())
app.use('/api', routes)
app.use(errorHandler)

app.listen(port, () => console.log(`Event is coming on port ${port}`))
