import web3 from './web3';
import CampaignFactory from './build/contracts/CampaignCreator.json';

const campaignFactoryAddress = "0xf2e54948d2f1a40ec4764785f7a33ed3a8a76c83";

const instance = new web3.eth.Contract(CampaignFactory.abi, campaignFactoryAddress);

export default instance;
