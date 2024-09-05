const express = require('express');
const router = express.Router();

// Simulated product database
const products = [
  { id: 1, name: 'Eco-Friendly Water Bottle', price: 19.99, description: 'Sustainable and reusable water bottle' },
  { id: 2, name: 'Bamboo Toothbrush', price: 3.99, description: 'Biodegradable toothbrush made from bamboo' },
  { id: 3, name: 'Organic Cotton T-Shirt', price: 24.99, description: 'Comfortable t-shirt made from 100% organic cotton' }
];

// GET all products
router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Product List',
    products
  });
});

// GET specific product by ID
router.get('/:id', (req, res, next) => {
  const productId = parseInt(req.params.id, 10);
  const product = products.find(p => p.id === productId);
  
  if (product) {
    res.status(200).json({
      message: 'Product Details',
      product
    });
  } else {
    res.status(404).json({
      message: 'Product not found'
    });
  }
});

// POST add new product (for admin use, extend with authentication)
router.post('/', (req, res, next) => {
  const { name, price, description } = req.body;
  
  if (name && price && description) {
    const newProduct = { id: products.length + 1, name, price, description };
    products.push(newProduct);
    res.status(201).json({
      message: 'Product added successfully!',
      product: newProduct
    });
  } else {
    res.status(400).json({
      message: 'Please provide name, price, and description for the product'
    });
  }
});

module.exports = router;
