const crypto = require('crypto');
const ApiKey = require('../models/ApiKey');

exports.generateApiKey = async (req, res) => {
  const apiKey = crypto.randomBytes(32).toString('hex');
  await ApiKey.create({ key: apiKey, user_id: req.userId });
  res.json({ apiKey });
};
