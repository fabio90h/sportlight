const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// Needed to access req.body
app.use(bodyParser.json())

// API easy test
app.get('/', (req, response) => {
    response.send("tests")
})

// YouTube API
require('./routes/youtubeRoutes')(app)

// Football API
require('./routes/fixturesRoutes')(app)

app.listen(5000)