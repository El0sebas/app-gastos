const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nombre: String,
  email: String,
  password: String
});

module.exports = mongoose.model('User', userSchema);