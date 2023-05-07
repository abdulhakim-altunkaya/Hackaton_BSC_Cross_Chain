// SPDX-License-Identifier: UNLICENSED

pragma solidity >=0.8.7;

contract Orange {
    uint public unlockTime;

    function changeTime(uint _newTime) external {
        unlockTime = _newTime;
    }
}
