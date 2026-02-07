const router = require('express').Router();
const Service = require('../models/Service');

router.get('/', async (_, res) => {
  const services = await Service.find({ active: true });
  res.json(services);
});

module.exports = router;