const express = require('express');
const router = express.Router();

// GET home page for mynaturescrates.com
router.get('/', function(req, res, next){
  res.status(200).json({
    message: 'Welcome to Nature\'s Crates - Your Source for Eco-Friendly Products and Sustainable Solutions!',
    description: 'Explore our range of eco-conscious products and join the movement for a greener future.'
  });
});

// About Page
router.get('/about', (req, res, next) => {
  res.status(200).json({
    message: 'About Nature\'s Crates',
    description: 'Learn more about our mission to deliver sustainable products and eco-friendly solutions.'
  });
});

// Contact Page
router.get('/contact', (req, res, next) => {
  res.status(200).json({
    message: 'Contact Us',
    contact_info: 'Email us at support@naturescrates.com for any questions or concerns.'
  });
});

module.exports = router;
