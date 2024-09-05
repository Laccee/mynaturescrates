const express = require('express');
const router = express.Router();

// Simulate user database (replace with actual database later)
const users = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
  { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com' }
];

// GET user profile by ID
router.get('/:id', (req, res, next) => {
  const userId = parseInt(req.params.id, 10);
  const user = users.find(u => u.id === userId);
  
  if (user) {
    res.status(200).json({
      message: 'User Profile',
      user
    });
  } else {
    res.status(404).json({
      message: 'User not found'
    });
  }
});

// POST new user registration
router.post('/register', (req, res, next) => {
  const { name, email } = req.body;
  
  if (name && email) {
    const newUser = { id: users.length + 1, name, email };
    users.push(newUser);
    res.status(201).json({
      message: 'User registered successfully!',
      user: newUser
    });
  } else {
    res.status(400).json({
      message: 'Please provide both name and email'
    });
  }
});

// POST user login (basic example, replace with actual auth logic)
router.post('/login', (req, res, next) => {
  const { email } = req.body;
  const user = users.find(u => u.email === email);

  if (user) {
    res.status(200).json({
      message: 'Login successful!',
      user
    });
  } else {
    res.status(401).json({
      message: 'Invalid credentials'
    });
  }
});

module.exports = router;
