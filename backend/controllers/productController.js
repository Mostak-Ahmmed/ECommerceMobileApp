const Product = require('../models/Product');

exports.list = async (req, res) => {
  try {
    const items = await Product.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (e) {
    console.error('PRODUCT LIST:', e);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.create = async (req, res) => {
  try {
    const { name, price, image, description } = req.body;
    const item = await Product.create({ name, price, image, description });
    res.status(201).json(item);
  } catch (e) {
    console.error('PRODUCT CREATE:', e);
    res.status(400).json({ message: 'Invalid data' });
  }
};
