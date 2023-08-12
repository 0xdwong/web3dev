const Contract = artifacts.require("Test");

module.exports = function(deployer) {
  // Deploy the contract as our only task
  deployer.deploy(Contract);
};