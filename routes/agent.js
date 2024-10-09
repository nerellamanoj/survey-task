const express = require('express');
const { createAgent } = require("../controllers/agentControllers");
const router = express.Router();


// POST - Create an agent
router.post('/create', createAgent);

module.exports = router;
