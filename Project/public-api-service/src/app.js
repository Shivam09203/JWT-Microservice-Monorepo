require('dotenv').config();
const express = require('express');
const connectDB = require('./database');
const profileRoutes = require('./routes/profileRoutes');
const candidateRoutes = require('./routes/candidateRoutes');

const app = express();

// Middleware
app.use(express.json());

// Database Connection
connectDB(process.env.MONGO_URI);

// Routes
app.use('/api/public', profileRoutes);
app.use('/api/public', candidateRoutes);

// Default Route
app.get('/', (req, res) => {
  res.send('Public API Microservice is running');
});

// Start Server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Public API Microservice running on port ${PORT}`));
