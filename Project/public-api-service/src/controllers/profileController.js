const User = require('../models/User');
const ApiKey = require('../models/ApiKey');

exports.getProfile = async (req, res) => {
  const apiKey = req.headers['x-api-key'];
  const keyData = await ApiKey.findOne({ key: apiKey }).populate('user_id');
  if (!keyData) return res.status(401).send('Invalid API key');

  const user = await User.findById(keyData.user_id);
  if (!user) return res.status(404).send('User not found');

  res.json({
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
  });
};
