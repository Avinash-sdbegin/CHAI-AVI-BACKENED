require('dotenv').config() //dotenv ko import kiya hai
//dotenv ko import kiya hai jo environment variables ko manage karta hai
const express = require('express')
//
const app = express()
const port = 4000//server listen karta hai PORT pe karega

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter', (req, res) => {
  res.send(' Twitter!')
})

app.get('/login', (req, res) => {
    res.send('<h1>Login Page</h1>')
    })

    app.get('/youtube', (req, res) => {
    res.send('<h1>Youtube Page</h1>')   
})
//listen bhi ek varible hai jo port me hai
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
