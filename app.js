const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Atlas Connection URI (Replace with your own)
const MONGO_URI = 'mongodb+srv://sujeena843:meet1974@cluster0.c4cbvx8.mongodb.net/Marketplace?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Use the productRoutes for product-related routes
app.use('/api', productRoutes);

// Add a route to handle the root URL ("/") and send the welcome message
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to DressStore application.' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
