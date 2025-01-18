const mongoose = require('mongoose');

const apiKeySchema = new mongoose.Schema({
  key: { type: String, unique: true },
  user_id: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model('ApiKey', apiKeySchema);
