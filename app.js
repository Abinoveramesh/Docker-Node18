const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Serve static files from the public directory
app.use(express.static('public'));

// Define a route handler for the root path
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Define a route handler for handling POST requests
app.post('/submit', (req, res) => {
  const { name, email } = req.body;
  res.send(`Received POST request. Name: ${name}, Email: ${email}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

