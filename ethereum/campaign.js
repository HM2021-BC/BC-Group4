import web3 from './web3';
import Fundraiser from './build/contracts/Fundraiser.json';

export default address => {
  return new web3.eth.Contract(Fundraiser.abi, address);
};
