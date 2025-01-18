const express = require('express');
const crypto = require('crypto');
const ApiKey = require('../models/ApiKey');
const authenticate = require('../middleware/authenticate');
const router = express.Router();

router.post('/generate-api-key', authenticate, async (req, res) => {
  const apiKey = crypto.randomBytes(32).toString('hex');
  await ApiKey.create({ key: apiKey, user_id: req.userId });
  res.json({ apiKey });
});

module.exports = router;
