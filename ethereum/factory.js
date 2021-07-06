import web3 from './web3';
import FundraiserCreator from './build/contracts/FundraiserCreator.json';

const campaignFactoryAddress = "0xad1EF667E2c93353c64044aA148505648486fc31";

const instance = new web3.eth.Contract(FundraiserCreator.abi, campaignFactoryAddress);

export default instance;
