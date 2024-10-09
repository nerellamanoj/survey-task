const express = require('express');
const { createLead } = require('../controllers/leadControllers');
const router = express.Router();

// POST - Create a lead
router.post('/create', createLead);

module.exports = router;
