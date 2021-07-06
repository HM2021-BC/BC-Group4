pragma solidity ^0.5.0;

/**
 * @title Crowd fund smart contract, demonstration to solve problem of center crowd fund model
 * @author Duong Van Sang
 * @dev Crowd Colla is smart contract is contract that allow creators and entrepreneurs to get fund
 * from supporters for their project, and also let supporter join in approving their expense items
 */

 //asdasda
contract Fundraiser{ 

    // address of the person that recieves the donation
    address public donee;

    // min contribution value in ETH
    uint public minimumContribution;


    // description about your DonationGoal
    string public donationDescription;

    uint public donationGoal;

    // a mapping list of supporter address, to check if address is supporter or not
    mapping(address=>bool) public donor;

    // current number of donator of campaign, 
    // when any one contribute money for project, he/she will be come supporter
    uint public numberDonors;


    modifier notDonee() {
        require(msg.sender != donee);
        _;
    }

    modifier DonorOnly() {
        require(donor[msg.sender]);
        _;
    }

    /**
     * @dev init campaign 
     * @param donation_reciever who is author and manage project
     * @param minContribution minimum money can contribute for project (in ETH)
     * @param description description of campaign, purpose of campaign
     * @param goal description of campaign, purpose of campaign
     */

    constructor(address donation_reciever, uint minContribution, string memory description, uint goal) public {  
        donee = donation_reciever;
        minimumContribution = minContribution;
        donationDescription = description;
        donationGoal = goal;
    }

    /**
     * @dev payable of campaign, where supporter send Ethereum to contribute for campaign
     */
    function contribute() public payable {
        require(msg.sender != donee);
        require(msg.value > minimumContribution);
        if(!donor[msg.sender]) {
            numberDonors++;
        }
        donor[msg.sender] = true;
    }

    /**
     * @dev payable of campaign, where supporter send Ethereum to contribute for campaign
     */
    function donate() public payable {
        contribute();
    }    


    /**
     * @dev get summary information about campaign
     */
    function getSummary() public view returns (
      uint, uint, uint, address, string memory, uint
      ) {
        return (
          minimumContribution,
          address(this).balance,
          numberDonors,
          donee,
          donationDescription,
          donationGoal
        );
    }

}
