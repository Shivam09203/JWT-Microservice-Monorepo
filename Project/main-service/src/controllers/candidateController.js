const Candidate = require('../models/Candidate');

exports.addCandidate = async (req, res) => {
  const { first_name, last_name, email } = req.body;
  const candidate = new Candidate({ first_name, last_name, email, user_id: req.userId });
  await candidate.save();
  res.status(201).json({ message: 'Candidate added successfully' });
};

exports.getCandidates = async (req, res) => {
  const candidates = await Candidate.find({ user_id: req.userId });
  res.json(candidates);
};
