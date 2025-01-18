const express = require('express');
const { getCandidates } = require('../controllers/candidateController');
const apiKeyMiddleware = require('../middleware/apiKeyMiddleware');
const router = express.Router();

router.get('/candidate', apiKeyMiddleware, getCandidates);

module.exports = router;
