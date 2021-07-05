pragma solidity ^0.5.0;

import "./Fundraiser.sol";

/**
* @dev Campaign Factory contract to generate Crowdfund smart contract to run Crowd fund
*/
contract FundraiserCreator {

    // list of campaigns
    address[] public fundraisers;
    
    /**
    * @dev Create new campaign and send default manager is caller
    * @param minContribution minimum money can contribute for project (in ETH)
    * @param description description of campaign, purpose of campaign
    */
    function createFundraiser(uint minContribution, string memory description) public {
        address fundraiser = address (new Fundraiser(
            msg.sender,
            minContribution,
            description
        ));

        fundraisers.push(fundraiser);
    }

    /**
    * @dev get all deployed campaigns
    */
    function getDeployedFundraisers() public view returns (address[] memory) {
        return fundraisers;
    }
}
