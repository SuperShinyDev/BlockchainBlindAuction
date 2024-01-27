const BlindAuction = artifacts.require('BlindAuction');

module.exports = function(deployer) {
    deployer.deploy(BlindAuction, 600, 600, '0x5e6E527d65C0cCCA5037939f47f9D115C10305Dd');
}