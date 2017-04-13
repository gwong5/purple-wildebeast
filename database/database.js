// const db = require ({database:'bookstore'})
const pgp = require ('pg-promise')()
const db = pgp({database: 'bookstore'})

const createBook = (title, author, genre, image, description) => db.none('INSERT INTO books (title, author, genre, image, description) VALUES($1, $2, $3, $4, $5)', [title, author, genre, image, description])

const getAllBooks = () => db.any('SELECT * FROM books')

const getBook = (id) => db.any('SELECT * FROM books WHERE ID = $1', [id])




module.exports = { createBook, getAllBooks, getBook }
