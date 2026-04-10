const mongoose = require('mongoose');

const gastoSchema = new mongoose.Schema({
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  titulo: String,
  monto: Number,
  fecha: Date
});

module.exports = mongoose.model('Gasto', gastoSchema);