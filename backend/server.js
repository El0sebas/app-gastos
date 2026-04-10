const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/gastos', require('./routes/gastos.routes'));

app.listen(5000, () => {
  console.log('Servidor corriendo en puerto 5000');
});