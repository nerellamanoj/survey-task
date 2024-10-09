const Lead = require('../models/Lead');

// Create Lead
exports.createLead = async (req, res) => {
  try {
    const newLead = new Lead(req.body);
    await newLead.save();
    res.status(201).json({ message: 'Lead created successfully', lead: newLead });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
