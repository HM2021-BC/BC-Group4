var FundraiserCreator = artifacts.require("./FundraiserCreator");

module.exports = function(deployer) {
  deployer.deploy(FundraiserCreator);
};
