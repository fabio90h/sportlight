const express = require('express')
const app = express()

app.get('/', (req, response) => {
    response.send("testingg")
})

app.listen(5000)