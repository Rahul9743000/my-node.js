// Import the required modules
const express = require('express');
const app = express();

// Set the port number
const port = 5000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Home route (Optional)
app.get('/', (req, res) => {
  res.send('Welcome to My Node.js Recharge API');
});

// Define the POST endpoint for /recharge
app.post('/recharge', (req, res) => {
  const { actual_amount, cashback, new_balance, recharge_amount, status } = req.body;

  // Check if all required fields are provided
  if (typeof actual_amount === 'undefined' || 
      typeof cashback === 'undefined' || 
      typeof new_balance === 'undefined' || 
      typeof recharge_amount === 'undefined' || 
      typeof status === 'undefined') {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Process the data (you can modify this to add your logic as needed)
  return res.json({
    actual_amount,
    cashback,
    new_balance,
    recharge_amount,
    status
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://127.0.0.1:${port}`);
});
