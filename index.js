const express = require('express');
const { MongoClient } = require('mongodb');
const path = require('path');

const app = express();
const port = 3000;

// Connection URI
const uri = 'mongodb://localhost:27017';

// Database Name
const dbName = 'mydb';

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to MongoDB client
const client = new MongoClient(uri);

// Connect to the database and start the server
async function startServer() {
  try {
    // Connect the client to the server
    await client.connect();
    console.log('Connected to MongoDB server');

    // Set up routes
    app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, 'public', 'index.html'));
    });

    // Start the server
    app.listen(port, () => {
      console.log(`Server is listening at http://localhost:${port}`);
  
