const express = require('express')
const router = express.Router()
const db = require('../database/database')

router.get('/', (request, response) => {
    response.render('index')
})

router.post('/add', (request, response) => {
    const {title, year, author, genre} = request.body
  db.createBook(title, year)
      .then(db.createAuthor(author))
      .then(db.createGenre(genre))
      .then(() => response.redirect('/'))
      .catch(error => response.send({ error, message: error.message}))
})

module.exports = router
