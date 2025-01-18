const Candidate = require('../models/Candidate');
const ApiKey = require('../models/ApiKey');

exports.getCandidates = async (req, res) => {
  const apiKey = req.headers['x-api-key'];
  const keyData = await ApiKey.findOne({ key: apiKey });
  if (!keyData) return res.status(401).send('Invalid API key');

  const candidates = await Candidate.find({ user_id: keyData.user_id });
  res.json(candidates);
};
