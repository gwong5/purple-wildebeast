const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')

app.set('view engine', 'pug')

const addBook = require('./routes/routes')
const indexFile = require('./routes')

app.set('views', path.join(__dirname, 'views'))

app.listen(3000)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', indexFile)
app.use('/add', addBook)


// app.get('/', (request, response) => {
//     response.render('index')
// })
