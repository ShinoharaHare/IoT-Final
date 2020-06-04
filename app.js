const express = require('express')
const bodyParser = require('body-parser')

const exec = require('child_process').exec

const config = require('./config.json')
const app = express()

app.use(bodyParser.json())
app.use(express.static(__dirname + '/static'))

app.post('/unlock', (req, res) => {
    if (req.body.password == config.password) {
        // Here
	exec("python3 servoGo.py", (error, stdout, stderr) => {
		if(error || stderr){
			console.log("error")
			return ;
		}
		console.log("unlocked")
	})
        res.status(200).json()
    } else {
        res.status(401).json()
    }
})

app.listen(8888, '0.0.0.0', () => {
    console.log('http://localhost:8888')
})
