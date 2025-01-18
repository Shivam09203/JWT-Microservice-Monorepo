require('dotenv').config();
const express = require('express');
const connectDB = require('./database');
const authRoutes = require('./routes/authRoutes');
const candidateRoutes = require('./routes/candidateRoutes');
const apiKeyRoutes = require('./routes/apiKeyRoutes');

const app = express();

// Middleware
app.use(express.json());

// Connect Database
connectDB(process.env.MONGO_URI);

// Routes
app.use('/api', authRoutes);
app.use('/api', candidateRoutes);
app.use('/api', apiKeyRoutes);

// Default Route
app.get('/', (req, res) => {
  res.send('Main Service is running');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Main Service running on port ${PORT}`));
