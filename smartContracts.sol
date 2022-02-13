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

  function remove(uint i) public {
    delete myArray[i];
    // remember that delete the does not delete the element, but only sets it to 0
}

}

contract enums{

    enum shirtColor {RED, WHITE, BLUE}
    shirtColor choice;
    shirtColor constant defaultChoice = shirtColor.BLUE;

    function setWhite() public{
        choice = shirtColor.WHITE;
    }

    function getChoice() public view returns(shirtColor){
        return choice;
    }

    function getDefaultChoice() public view returns(uint){
        return uint(defaultChoice);
    }

}

contract structs{
    struct Movie {
        string title;
        string director;
        uint movie_id;
    }

    Movie comedy;

    function setMovie() public{
        comedy = Movie("myTitle","myDirector",2);
    }

    function getId() public view returns(uint){
       return comedy.movie_id;
    }

    function getTitle() public view returns(string memory){
       return comedy.title;
    }
}

contract learnMapping{
    mapping(address => uint) public myMap;

    function getAddress(address _addr) public view returns(uint){
        return myMap[_addr];
    }
    function setAddress(address _addr, uint _i) public {
        myMap[_addr]=_i;
    }

    function removeAddress(address _addr) public{
        delete myMap[_addr];
    }
}

contract Assignment{
    struct Movie{
        string title;
        string director;
    }

    mapping(uint => Movie) public movie;

    function addMovie(uint movie_id, string memory _title, string memory _director) public{
        movie[movie_id]=Movie(_title, _director);
    }

}
