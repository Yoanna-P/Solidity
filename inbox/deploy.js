// deploy code will go here
const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile')

const provider = new HDWalletProvider(
  'athlete blouse fix despair dilemma candy snap inmate enforce praise often power',
  'https://ropsten.infura.io/v3/cdf8275cfe114c24af2f730918e21970'
);

const web3 = new Web3(provider);

const deploy = async ()=> {
  const accounts = await web3.eth.getAccounts();
  console.log('Attempting deployment from',accounts[0])
  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data:bytecode,arguments:['hi']})
    .send({gas:'1000000',from:accounts[0]})
  console.log("Contract deployed to", result.options.address);
  provider.engine.stop()
};
deploy();
