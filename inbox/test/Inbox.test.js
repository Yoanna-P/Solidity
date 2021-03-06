// contract test code will go here
const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require('../compile');

let accounts;
let inbox;

beforeEach(async () => {
  //get a list of all accounts
  accounts = await web3.eth.getAccounts();
  //use one of those accuonts
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['test']})
    .send({from: accounts[0], gas: "1000000"})
});

describe("Inbox", ()=>{
  it("can run", ()=>{
    assert.ok(inbox.options.address);
  });

  it("has message", async ()=> {
    const message = await inbox.methods.message().call();
    assert.equal(message, 'test!');
  });

  it("can change message", async ()=> {
    await inbox.methods.setMessage("bye").send({ from: accounts[0] });
    const message = await inbox.methods.message().call();
    assert.equal(message, "bye");
  });
});


/*
class Car {
  park(){
    return "stopped";
  }

  drive(){
    return "vroom";
  }
}

let car;

beforeEach(()=>{
  car = new Car();
});

describe("Car", ()=> {
  it("can park", ()=> {
    assert.equal(car.park(),"stopped")
  });

  it("can drive", ()=> {
    assert.equal(car.drive(),"vroom")
  });
});
*/
