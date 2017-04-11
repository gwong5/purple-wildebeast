const express = require('express')
const router = express.Router()
    // const path = require('path')
const bodyparser = require('body-parser')
const db = require('../database/database')


// router.use('/', routes)
// router.use('/add', index)
router.use(bodyparser.json())

router.post('/', (request, response) => {
console.log('request.body', request.body, request.params)
  db.createBook(request.body.title, request.body.year)
      // .then(db.createAuthor(request.body.author))
      // .then(db.createGenre(request.body.genre))
      .then((book) => response.json({book:'book'}))
      .catch(error => response.send({ error, message: error.message}))
})

module.exports = router
