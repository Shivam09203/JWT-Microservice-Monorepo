const express = require('express');
const authenticate = require('../middleware/authenticate');

const router = express.Router();

// Protected route
router.post('/protected', authenticate, (req, res) => {
  res.status(200).json({ message: 'Access granted to protected route' });
});

module.exports = router;
