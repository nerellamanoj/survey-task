const express = require('express');
const { createProduct } = require('../controllers/productController');
const router = express.Router();

// POST - Create a product
router.post('/create', createProduct);

module.exports = router;
