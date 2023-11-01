const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');

const app = express();

app.use(cors());
app.use(express.json());


const MONGO_URI = 'mongodb+srv://sujeena843:Sujina@cluster0.c4cbvx8.mongodb.net/Marketplace?retryWrites=true&w=majority';

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


app.use('/api', productRoutes);


app.get('/', (req, res) => {
  res.json({ message: 'Welcome to DressStore application.' });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
