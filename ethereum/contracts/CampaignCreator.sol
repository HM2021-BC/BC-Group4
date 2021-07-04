pragma solidity ^0.4.25;

import "./CrowdCollab.sol";

/**
* @dev Campaign Factory contract to generate Crowdfund smart contract to run Crowd fund
*/
contract CampaignCreator {

    // list of campaigns
    address[] public campaigns;
    
    /**
    * @dev Create new campaign and send default manager is caller
    * @param minContribution minimum money can contribute for project (in ETH)
    * @param description description of campaign, purpose of campaign
    */
    function createCampaign(uint minContribution, string description) public {
        address newCampaign = new CrowdCollab(
            msg.sender,
            minContribution,
            description
        );

        campaigns.push(newCampaign);
    }

    /**
    * @dev get all deployed campaigns
    */
    function getDeployedCampaigns() public view returns (address[]) {
        return campaigns;
    }
}
