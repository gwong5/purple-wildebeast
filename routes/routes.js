const express = require('express')
const router = express.Router()
const db = require('../database/database')

router.get('/', (request, response) => {
const { title, author, genre, image, description } = request.body
console.log('------------------------------------');
console.log(request.body);
console.log('------------------------------------');
  db.getBook()
    .then((books) => response.render('index', {books}))
    .catch(error => response.send({ error, message: error.message }))
})

router.post('/add', (request, response) => {
const { title, author, genre, image, description } = request.body
console.log('------------------------------------');
console.log(request.body);
console.log('------------------------------------');
db.createBook(title, author, genre, image, description)
    .then(() => response.redirect('/'))
    .catch(error => response.send({ error, message: error.message }))
})

module.exports = router