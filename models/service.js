const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
  serviceId: String,
  name: String,
  provider: String,
  price: String,
  active: Boolean
});

module.exports = mongoose.model('Service', ServiceSchema);