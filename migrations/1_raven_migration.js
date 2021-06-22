const Lottery = artifacts.require("Lottery");

module.exports = function (deployer) {
  deployer.deploy(Lottery, 5, 40, 40, 70, 4);
};
