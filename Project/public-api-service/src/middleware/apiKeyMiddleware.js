const ApiKey = require('../models/ApiKey');

module.exports = async (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (!apiKey) return res.status(403).send('API key is required');

  const keyData = await ApiKey.findOne({ key: apiKey });
  if (!keyData) return res.status(401).send('Invalid API key');

  req.userId = keyData.user_id;
  next();
};
