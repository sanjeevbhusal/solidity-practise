//SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

contract SimpleStorage {

    struct Zombie {
        uint id;
        string name;
    }


    Zombie[] public zombie_list;

    function addZombie(uint _id, string memory _name) public {
        zombie_list.push(Zombie(_id, _name));
    }
}