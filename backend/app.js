require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const createError = require('http-errors');

// Load API keys from environment variables
const firebaseApiKey = process.env.FIREBASE_API_KEY;
const shopifyApiKey = process.env.SHOPIFY_API_KEY;

const app = express();

// Set up Pug as the templating engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Middleware
app.use(cors()); // Enable CORS
app.use(logger('dev')); // Log requests to the console
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded bodies
app.use(cookieParser()); // Parse cookies
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files

// Routes
app.get('/', (req, res) => {
  res.status(200).json({
    message: "Welcome to Nature's Crates - Your Source for Eco-Friendly Products and Sustainable Solutions!",
    description: "Explore our range of eco-conscious products and join the movement for a greener future."
  });
});

app.get('/about', (req, res) => {
  res.status(200).json({
    message: "About Nature's Crates",
    description: "Learn more about our mission to deliver sustainable products and eco-friendly solutions."
  });
});

app.get('/contact', (req, res) => {
  res.status(200).json({
    message: "Contact Us",
    contact_info: "Email us at support@naturescrates.com for any questions or concerns."
  });
});

// Example of adding more routes
// const usersRouter = require('./routes/users');
// const productsRouter = require('./routes/products');

// app.use('/users', usersRouter);
// app.use('/products', productsRouter);

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error'); // Render the error page
});

module.exports = app;
