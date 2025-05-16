const express = require('express')
const app = express()
require('dotenv').config()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/home',(req,res)=>{
    res.send('its a home page')
})

app.get('/login',(req,res)=>{
    res.send('<h1>Hey user...</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT} `)
})

