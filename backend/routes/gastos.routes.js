const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Gasto = require('../models/Gasto');

router.post('/', auth, async (req, res) => {
  const { titulo, monto, fecha } = req.body;

  const gasto = new Gasto({
    usuario: req.user.id,
    titulo,
    monto,
    fecha
  });

  await gasto.save();
  res.json(gasto);
});

router.get('/', auth, async (req, res) => {
  const gastos = await Gasto.find({ usuario: req.user.id });
  res.json(gastos);
});

module.exports = router;