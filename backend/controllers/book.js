const Book = require('../models/Book');

exports.createBook = (req, res, next) => {}

exports.modifyBook = (req, res, next) => {}

exports.deleteBook = (req, res, next) => {}

exports.getAllBooks = (req, res, next) => {
    Book.find()
    .then(books => res.status(200).json(books))
    .catch(error => res.status(400).json({ error }));}

exports.getThisBook = (req, res, next) => {}