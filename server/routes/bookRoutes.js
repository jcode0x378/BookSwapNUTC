const express = require('express');
const Book = require('../models/Book');
const router = express.Router();

// 獲取所有書本
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 添加新書本
router.post('/add', async (req, res) => {
  const book = new Book({
    title: req.body.title,
    photo: req.body.photo,
    price: req.body.price,
    location: req.body.location,
    availableTimes: req.body.availableTimes,
    description: req.body.description,
    owner: req.body.owner,
  });

  try {
    const newBook = await book.save();
    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
