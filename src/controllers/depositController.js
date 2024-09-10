// controllers/depositController.js
const { getDepositData, addDepositToDB } = require('../services/ethService');

const trackDeposits = async (req, res) => {
    try {
        const deposits = await getDepositData();
        res.status(200).json({ success: true, data: deposits });
    } catch (error) {
        console.error("Error tracking deposits: ", error);
        res.status(500).json({ success: false, error: 'Server Error' });
    }
};

// New function to handle adding deposits
const addDeposit = async (req, res) => {
    try {
        const deposit = req.body;
        await addDepositToDB(deposit);
        res.status(201).json({ success: true, message: 'Deposit added successfully' });
    } catch (error) {
        console.error("Error adding deposit: ", error);
        res.status(500).json({ success: false, error: 'Server Error' });
    }
};

module.exports = { trackDeposits, addDeposit };
