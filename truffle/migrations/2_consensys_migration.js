const MastermindPrize = artifacts.require("MastermindPrize");
const MastermindVerifier = artifacts.require("MastermindVerifier");

module.exports = function(deployer) {
  deployer.deploy(MastermindPrize);
  deployer.deploy(MastermindVerifier);
};
