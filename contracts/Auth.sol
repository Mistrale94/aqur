// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Auth {
    uint public userCount = 0;

    mapping(string => user) public usersList;

    struct user {
        string email;
        string password;
    }

    // events

    event userCreated(string email, string password);

    function createUser(
        string memory _email,
        string memory _password
    ) public {
        userCount++;
        usersList[_email] = user(_email, _password);
        emit userCreated(_email, _password);
    }

    function verifyUser(
        string memory _email,
        string memory _password
    ) public view returns (bool) {
        user memory u = usersList[_email];

        // Vérifier si l'utilisateur existe et si le nom d'utilisateur correspond
        if (
            bytes(u.email).length == 0
        ) {
            return false;
        }

        // Vérifier le mot de passe
        return
            keccak256(abi.encodePacked(u.password)) ==
            keccak256(abi.encodePacked(_password));
    }
}
