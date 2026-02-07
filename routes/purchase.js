const router = require('express').Router();
const Purchase = require('../models/Purchase');

router.get('/:wallet', async (req, res) => {
  const data = await Purchase.find({ wallet: req.params.wallet });
  res.json(data);
});

module.exports = router;