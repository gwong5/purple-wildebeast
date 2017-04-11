const express = require('express')
const app = express()
const path = ('path')
const bodyparser = require('body-parser')

app.set('view engine', 'pug')

app.get('/', (request, response) => {
  response.render('index.pug')
}).listen(3000)
