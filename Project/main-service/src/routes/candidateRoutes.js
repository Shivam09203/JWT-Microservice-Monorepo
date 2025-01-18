const express = require('express');
const { addCandidate, getCandidates } = require('../controllers/candidateController');
const authenticate = require('../middleware/authenticate');
const router = express.Router();

router.post('/candidate', authenticate, addCandidate);
router.get('/candidate', authenticate, getCandidates);

module.exports = router;
