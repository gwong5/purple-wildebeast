const express = require('express')
const router = express.Router()
const db = require('../database/database')

router.get('/', (request, response) => {
const { title, author, genre, image, description } = request.body
  db.getAllBooks()
    .then((books) => response.render('index', {books}))
    .catch(error => response.send({ error, message: error.message }))
})

router.get('/details/:id', (request, response) => {
const {id} = request.params
  db.getBook(id)
    .then((book) => response.render('details', {book}))
    .catch(error => response.send({ error, message: error.message }))
})

router.get('/create', (request, response) => {
  response.render('create')
})

router.post('/deleteBook/:id', (request, response) => {
  const { id } = request.params
  db.deleteBook(id)
    .then(() => response.redirect( '/' ))
    .catch(error => response.send({ error, message: error.message }))
})

router.post('/add', (request, response) => {
const { title, author, genre, image, description } = request.body
if (title, author, genre, image, description) {
  db.createBook(title, author, genre, image, description)
      .then(() => response.redirect('/'))
      .catch(error => response.send({ error, message: error.message }))
  }
})

router.put('/update/:id', (request, response) => {
  const { title, author, genre, image, description } = request.body
  const { id } = request.params
  db.updateBook(id, title, author, genre, image, description)
    .then(() => response.redirect( '/' ))
    .catch(error => response.send({ error, message: error.message }))
})

module.exports = router