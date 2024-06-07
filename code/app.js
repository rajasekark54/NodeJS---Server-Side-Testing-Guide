const express = require('express');
const app = express();
app.use(express.json());

let books = [];

app.post('/books', (req, res) => {
  const book = req.body;
  books.push(book);
  res.status(201).send(book);
});

app.get('/books', (req, res) => {
  res.send(books);
});

module.exports = app;
