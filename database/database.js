// const db = require ({database:'bookstore'})
const pgp = require ('pg-promise')()
const db = pgp({database: 'bookstore'})

const createBook = (title, year) => db.none('INSERT INTO books (title, year) VALUES($1, $2)', [title, year])

const createAuthor = (author) => db.none('INSERT INTO authors (name) VALUES($1)', [author])

const createGenre = (genre) => db.none('INSERT INTO genres (name) VALUES($1)', [genre])

module.exports = { createBook, createAuthor, createGenre }
