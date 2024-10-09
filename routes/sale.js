const express = require('express');
const { createSale, getSalesByAgentEmail } = require('../controllers/saleController');
const router = express.Router();

// POST - Create a sale
router.post('/create', createSale);

// GET - Get sales by agent email
router.get('/agent/:email', getSalesByAgentEmail);

module.exports = router;
