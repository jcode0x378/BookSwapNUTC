const express = require('express');
const router = express.Router();
const User = require('../models/User');

// 更新用戶資料
router.post('/profile', async (req, res) => {
  const { studentId, phone } = req.body;

  try {
    const user = await User.findOneAndUpdate(
      { studentId },
      { phone },
      { new: true, upsert: true },
    );
    res.json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
