require('dotenv').config({ path: './server/.env' });
console.log('MONGO_URI:', process.env.MONGO_URI);
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bookRoutes = require('./routes/bookRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = process.env.PORT || 5001;

// 中間件
app.use(
  cors({
    origin: 'http://localhost:5173', // 替換為你的前端地址
  }),
);
app.use(express.json());

// 路由
app.use('/api/books', bookRoutes);
app.use('/api/user', userRoutes);

// 連接到 MongoDB
console.log('Connecting to MongoDB...');
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  })
  .catch(err => {
    console.error('Connection error', err.message);
  });
