const pgp = require ('pg-promise')()
const db = pgp({database: 'bookstore'})

const createBook = (title, author, genre, image, description) => db.none('INSERT INTO books (title, author, genre, image, description) VALUES($1, $2, $3, $4, $5)', [title, author, genre, image, description])

const getAllBooks = () => db.any('SELECT * FROM books')

const getBook = (id) => db.any('SELECT * FROM books WHERE ID = $1', [id])

const deleteBook = (id) => db.none('DELETE FROM books WHERE ID = $1', [id])

const updateBook = (id, title, author, genre, image, description) => db.none('UPDATE books SET (title, author, genre, image, description) = ($2, $3, $4, $5, $6) WHERE id = $1', [id, title, author, genre, image, description])

module.exports = { createBook, getAllBooks, getBook, deleteBook, updateBook }
