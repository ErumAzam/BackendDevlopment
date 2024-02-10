require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
    res.send('Hello World! - default')
})

app.get('/login', (req, res) => {
    res.send('You are successfully loggedin')
})

app.get('/education', (req, res) => {
    res.send('I have done bachelors')
})

app.get('/Designation', (req, res) => {
    res.send('<h1>I am a senior software engineer</h1>');
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})