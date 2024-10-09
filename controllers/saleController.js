const Sale = require('../models/Sale');

// Create Sale
exports.createSale = async (req, res) => {
  try {
    const newSale = new Sale(req.body);
    await newSale.save();
    res.status(201).json({ message: 'Sale created successfully', sale: newSale });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Sales by Agent Email
exports.getSalesByAgentEmail = async (req, res) => {
  try {
    const agentEmail = req.params.email;
    const sales = await Sale.find({ agentEmail }).populate('products.productId');
    const totalAmount = sales.reduce((sum, sale) => sum + sale.totalPrice, 0);
    res.status(200).json({ sales, totalAmount });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
