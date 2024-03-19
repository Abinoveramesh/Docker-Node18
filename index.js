const { MongoClient } = require('mongodb'); // Import MongoClient from the mongodb module

const uri = 'mongodb://localhost:27017';
const dbName = 'mydb';
const client = new MongoClient(uri);

async function startServer() {
  try {
    await client.connect();
    console.log('Connected to MongoDB server');
    // Rest of the code remains unchanged
  } catch (err) {
    console.error('Error:', err);
  }
}

startServer();
