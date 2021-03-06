var fs = require('fs');
var GradualPonzi = artifacts.require("GradualPonzi");

module.exports = function(deployer, network) {

    // unlock account for geth
    if (network == "rinkeby" || network == "mainnet") {
        var password = fs.readFileSync("password", "utf8")
                         .split('\n')[0];
        web3.personal.unlockAccount(web3.eth.accounts[0], password);
    }

    deployer.deploy(GradualPonzi);
};
