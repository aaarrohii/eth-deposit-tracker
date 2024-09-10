// app.js
const cors = require('cors');
const express = require('express');
const dotenv = require('dotenv');
const depositRoutes = require('./routes/depositRoutes');
const connectDB = require('./db');

dotenv.config();
connectDB();

const app = express();
app.use(cors()); // Add this line
app.use(express.json());

app.use('/api/deposits', depositRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});



