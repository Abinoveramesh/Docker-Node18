// Connect to MongoDB client
const client = new MongoClient(uri);

// Connect to the database and start the server
async function startServer() {
  try {
    // Connect the client to the server
    await client.connect();
    console.log('Connected to MongoDB server');
    // Rest of the code remains unchanged
  } catch (err) {
    console.error('Error:', err);
  }
}
