const express = require('express'); // Import express
const mongoose = require('mongoose'); // Import mongoose
const usersRouter = require('./routes/users'); // Import the router that handles the users

const app = express(); // Create an instance of express

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/userdb', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => { 
    console.log("Connected to MongoDB"); 
  })
  .catch(err => { 
    console.log("Could not connect to MongoDB: " + err);
  });

// Set up middleware
app.use(express.json()); // Parse incoming request body

// Use the users router with the correct path
app.use('/api/users', usersRouter);

// Define the root route
app.get('/', (req, res) => {
  res.send('API is working');
});

// Start the server
const port = 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
