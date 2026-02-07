const { ethers } = require('ethers');
const Purchase = require('../models/Purchase');
const { provider } = require('../config/web3');

const abi = [
  'event PaymentReceived(address indexed payer, bytes32 indexed serviceId, address provider, uint256 amountPaid, uint256 platformFee, string refNote)'
];

const contract = new ethers.Contract(
  process.env.PAYMENT_HUB_ADDRESS,
  abi,
  provider
);

contract.on('PaymentReceived', async (payer, serviceId, _, __, ___, refNote, event) => {
  const apiKey = 'ai_' + Math.random().toString(36).substring(2);

  await Purchase.create({
    wallet: payer,
    serviceId: serviceId,
    txHash: event.log.transactionHash,
    apiKey
  });

  console.log('✅ Payment processed for', payer);
});