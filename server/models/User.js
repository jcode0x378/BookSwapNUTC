const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  studentId: { type: String, required: true },
  phone: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
