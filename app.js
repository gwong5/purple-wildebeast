const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()
app.listen(3000)

const indexFile = require('./routes/routes')

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', indexFile)
app.use('/details', indexFile)
app.use('/deleteBook', indexFile)