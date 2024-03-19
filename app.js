const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://localhost:27017';

// Database Name
const dbName = 'mydb';

// Create a new MongoClient
const client = new MongoClient(uri, { useUnifiedTopology: true });

// Function to perform database operations
async function main() {
  try {
    // Connect the client to the server
    await client.connect();
    console.log('Connected to MongoDB server');

    // Connect to the specific database
    const db = client.db(dbName);

    // Insert a document into the collection
    const collection = db.collection('documents');
    const document = { name: 'John', age: 30 };
    const result = await collection.insertOne(document);
    console.log(`Inserted ${result.insertedCount} document`);

    // Find all documents in the collection
    const documents = await collection.find({}).toArray();
    console.log('Found documents:', documents);
  } catch (err) {
    console.error('Error:', err);
  } finally {
    // Close the connection when done
    await client.close();
    console.log('Disconnected from MongoDB server');
  }
}

// Call the main function
main();
