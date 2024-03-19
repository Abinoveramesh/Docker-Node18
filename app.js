const express = require('express');
const mongoose = require('mongoose');

// Create Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/my_database', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err.message);
  });

// Define a simple schema
const Schema = mongoose.Schema;
const ItemSchema = new Schema({
  name: String,
  description: String,
});

// Define a model based on the schema
const Item = mongoose.model('Item', ItemSchema);

// Define a route to create a new item
app.post('/items', async (req, res) => {
  try {
    const newItem = await Item.create(req.body);
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Define a route to get all items
app.get('/items', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

