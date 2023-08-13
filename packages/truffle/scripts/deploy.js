require('dotenv').config();
const ethers = require('ethers');

const buildObj = require('../build/contracts/Test.json')

async function deploy(signer) {
    console.log("====deploying====");
    
    let factory = new ethers.ContractFactory(buildObj.abi, buildObj.bytecode, signer);
    let contract = await factory.deploy();
    await contract.deployed();

    console.log("Contract deployed address:", contract.address);
    return contract.address;
}
async function main() {
    const providerUrl = process.env.providerUrl || 'http://127.0.0.1:8545';
    const privateKey = process.env.PrivateKey;
    const provider = new ethers.providers.JsonRpcProvider(providerUrl);

    const signer = new ethers.Wallet(privateKey, provider);
    console.log({providerUrl,'signer':signer.address});

    await deploy(signer);
}

main()
  .catch(console.error)
  .finally(() => process.exit());