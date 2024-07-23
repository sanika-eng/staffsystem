const express = require('express');
const connectDB = require('./config/mongo');
const cors = require('cors');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware to parse JSON bodies
app.use(express.json());

// Enable CORS for all origins
app.use(cors());

// Import and use the staff routes
const staffRoutes = require('./routes/staff');
app.use('/api/staff', staffRoutes);

// Define a simple route to test server
app.get('/', (req, res) => res.send('API is running...'));

// Define the port and start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
