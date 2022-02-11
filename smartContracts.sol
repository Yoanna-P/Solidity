#arrays

pragma solidity 0.7.1;

contract Arrays{
  uint[] public myArray;

  function push(uint number) public {
      myArray.push(number);
  }

  function pop() public {
      myArray.pop();
  }

  function getLength() public view returns(uint){
      return myArray.length;
  }

}
