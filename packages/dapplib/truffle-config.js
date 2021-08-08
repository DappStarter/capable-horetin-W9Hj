require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue blue shadow shock note payment unusual grace person fortune gentle'; 
let testAccounts = [
"0x31f0ff4d5b2d03531d0bc610e4f91eba029e8bd24a506f02d2bdc72988110cb6",
"0x489f180c70de03cf4659f32a0138aa8aa549acc5c821616a1360f410cc2b758e",
"0xee224aaf217285b5f819d832eaf835026adececf3be632d5754d272a34d51dc1",
"0xc9f10773204f95dea5d51837a84e77220ef9c7a301afa123e35262b8704346c5",
"0x913a938d4150b2f8e84fd9a429fe57fbcfd0410cf01b3dbd004a9443a0ad1c1e",
"0x306555c72223a4cea1eec183c2c9b4ef436cf4931a45a062580ed90edebd3133",
"0xbb4fba66891c9f65d0041e85bdd291b44b090dbd6cfaf7a467bdd33fe175a2bf",
"0x23b345dff14c6a308fc11786062005f72b2bc5ead5c9743563169ae44f9bedc0",
"0x61125bb56a9f98a2c5a4ac465eb9a191f5b44eb0da50090d5604cce31b9cc350",
"0xe182c33a0570652165e62283a210faa2ae9d80eaa4b4c925ef40fca6413e716c"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

