const router = require('express').Router();
const Service = require('../models/Service');

router.post('/service', async (req, res) => {
  const s = await Service.create(req.body);
  res.json(s);
});

module.exports = router;