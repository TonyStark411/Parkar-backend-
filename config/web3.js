const { ethers } = require('ethers');

const provider = new ethers.JsonRpcProvider(process.env.POLYGON_RPC);

module.exports = { provider };