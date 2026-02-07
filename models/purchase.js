const mongoose = require('mongoose');

const PurchaseSchema = new mongoose.Schema({
  wallet: String,
  serviceId: String,
  txHash: String,
  apiKey: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Purchase', PurchaseSchema);