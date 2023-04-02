const { ethers } = require('ethers');


function isAddress(address) {
    return ethers.utils.isAddress(address);
}



module.exports = {
    isAddress,
};