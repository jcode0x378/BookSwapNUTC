require('dotenv').config({ path: './server/.env' });
console.log('MONGO_URI:', process.env.MONGO_URI);
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // 添加這行
const bookRoutes = require('./routes/bookRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = process.env.PORT || 5001;

// 使用CORS中間件
const allowedOrigins = [
  'http://localhost:5173',
  'https://5113-125-229-242-128.ngrok-free.app',
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
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
