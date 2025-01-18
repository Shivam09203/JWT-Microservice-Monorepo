const express = require('express');
const { getProfile } = require('../controllers/profileController');
const apiKeyMiddleware = require('../middleware/apiKeyMiddleware');
const router = express.Router();

router.post('/profile', apiKeyMiddleware, getProfile);

module.exports = router;
