const express = require('express')
const app = express()
const path = require('path')
const bodyparser = require('body-parser')
const db = require('../database/database.js')

app.use('/', routes)
app.use('/add', index)
app.use(bodyparser.json())

app.post('/add', (request, response, next) => {
    db.createBook(request.params.title, request.params.year)
    // .then(db.createAuthor(request.body.author))
    // .then(db.createGenre(request.body.genre))
    .then(book => {
      response.redirect('/')
  })
})

module.exports = app