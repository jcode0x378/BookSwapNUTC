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

// 添加書籍
router.post('/add', async (req, res) => {
  console.log('Request body:', req.body); // 添加這行來檢查請求數據
  try {
    const newBook = new Book(req.body);
    await newBook.save();
    res.status(201).json(newBook);
  } catch (err) {
    console.error('Error saving book:', err); // 添加這行來檢查錯誤信息
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
