const { ethers } = require('ethers');
const mongoose = require('mongoose');
const Deposit = require('../models/deposit');
const logger = require('../logger');

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => logger.info('Connected to MongoDB'))
  .catch(err => logger.error('MongoDB connection error:', err));

// Set up provider using Alchemy
const provider = new ethers.JsonRpcProvider(`https://eth-mainnet.alchemyapi.io/v2/${process.env.RPC_URL}`);
const beaconDepositContractAddress = '0x00000000219ab540356cBB839Cbe05303d7705Fa';

// ABI for the Beacon Deposit Contract
const abi = [
  "event DepositEvent(address indexed pubkey, uint256 amount)"
];

const contract = new ethers.Contract(beaconDepositContractAddress, abi, provider);

// Function to get deposit data
const getDepositData = async () => {
  try {
    const filter = contract.filters.DepositEvent();
    const events = await contract.queryFilter(filter);

    const deposits = events.map(event => ({
      blockNumber: event.blockNumber,
      blockTimestamp: event.blockNumber * 12, 
      fee: 0, 
      hash: event.transactionHash,
      pubkey: event.args.pubkey
    }));

    await Deposit.insertMany(deposits);
    logger.info('Deposits saved to MongoDB');

    return deposits;
  } catch (error) {
    logger.error('Error fetching deposit data:', error);
    throw new Error('Error fetching deposit data');
  }
};

module.exports = { getDepositData };
