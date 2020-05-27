const express = require('express')
const bodyParser = require('body-parser')

const config = require('./config.json')
const app = express()

var token = ''

app.use(bodyParser.json())

app.use(express.static(__dirname + '/static'))

app.post('/validate', (req, res) => {
    if (req.body.password == config.password) {
        res.status(200).json({ token: '' })
    } else {
        res.status(401).json()
    }
})

app.listen(80, '0.0.0.0', () => {
    console.log('http://127.0.0.1:80')
})