// routes/depositRoutes.js
const express = require('express');
const { trackDeposits, addDeposit } = require('../controllers/depositController');

const router = express.Router();

router.get('/', trackDeposits);
router.post('/', addDeposit); // Add this route for handling POST requests

module.exports = router;
