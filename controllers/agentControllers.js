const Agent = require('../models/Agent');

// Create Agent
exports.createAgent = async (req, res) => {
  try {
    const newAgent = new Agent(req.body);
    await newAgent.save();
    res.status(201).json({ message: 'Agent created successfully', agent: newAgent });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

