require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

connectDB();
require('./listeners/paymentListener');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/services', require('./routes/services'));
app.use('/api/purchases', require('./routes/purchase'));
app.use('/api/admin', require('./routes/admin'));

app.get('/health', (_, res) => res.send('OK'));

app.listen(process.env.PORT, () =>
  console.log(`🚀 Backend running on port ${process.env.PORT}`)
);