const vote = artifacts.require("voting");
module.exports = function(deployer) {
    deployer.deploy(vote);
};