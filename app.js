const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()
app.listen(3000)

const indexFile = require('./routes/routes')

app.set('view engine', 'pug')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', indexFile)
app.use(express.static('public'))
app.use(express.static('public/images'))
app.use(express.static('public/stylessheets'))
