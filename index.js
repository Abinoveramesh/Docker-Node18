// index.js
const express = require('express');
const mongodb = require('mongodb');

const app = express();
const port = 3000;

// MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017';

// Connect to MongoDB
mongodb.MongoClient.connect(mongoURL, { useUnifiedTopology: true }, (err, client) => {
    if (err) {
        console.error('Error connecting to MongoDB:', err);
        return;
    }

    console.log('Connected to MongoDB');

    const db = client.db('mydb'); // Replace 'mydb' with your database name

    // Define routes
    app.get('/', (req, res) => {
        // Send the index.html file
        res.sendFile(__dirname + '/index.html');
    });

    // Start the server
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
});

