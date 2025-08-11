const express = require('express');
const router = express.Router();

// Define routes
router.get('/api/game-status', (req, res) => {
    res.json({ status: 'Game not started' });
});

module.exports = router;