import web3 from './web3';
import FundraiserCreator from './build/contracts/FundraiserCreator.json';

const campaignFactoryAddress = "0xd33d27183CfEFd0DC4aA9f5bC5aA4833106B84c0";

const instance = new web3.eth.Contract(FundraiserCreator.abi, campaignFactoryAddress);

export default instance;
