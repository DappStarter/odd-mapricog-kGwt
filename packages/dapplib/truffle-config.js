require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt case area suspect blade decrease pitch hospital grunt light army general'; 
let testAccounts = [
"0x5a8a9b6a94d473067f919370a5a5eada06f29654b033c72b1c6ceace1ea887cd",
"0x0dedb7aa41db7aee22b07fa35c93fe91c9f7334b530b07cc22d548e256d15d09",
"0x5620444234b07036ce00aaa861a77024b44a7b0d92d3be8969960eba653d82e0",
"0xfb49cd407ee6d6240093493375ced3ed8339229fda2a98c3b5a4cc330146e03d",
"0xf15b9eb4e8e76e4273dd7587c672a1156232fffb26eab8b41e4a700feede07bf",
"0x1687fbe110a5b6ab7a931630a454010e37870564e37eb86cc9b9217a7571cff1",
"0x885eaba301abaced985660a9d477667d7cc174f03d8671f763987e9cf229190b",
"0x861bdcd6b03619193f56b4b79d3ecffdcdd98d9d02a289f0ac3a4ccdd29e1cd1",
"0x0f3f5760c41e15cc3f1933303d073e3862d9fb833d5252e16cf8fd9dcb655908",
"0x46ae9c387f3dfd551c464bc44369af23c1956abc151997493149c900576ada2b"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

