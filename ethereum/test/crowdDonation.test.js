const Fundraiser = artifacts.require("./Fundraiser.sol");
const FundraiserCreator = artifacts.require("./FundraiserCreator.sol");


let fundraiserCreator;
let FundraiserAdresses;
let fundraiser;

before(async () => {
	fundraiserCreator = await FundraiserCreator.new()
    
	var minContribution = '10000';
	var description = 'test Fundraiser App';
	var donationGoal = '6942069'
	await fundraiserCreator.createFundraiser(minContribution, description, donationGoal);
   	 
	FundraiserAdresses = await fundraiserCreator.getDeployedFundraisers.call();
    
	fundraiser = await Fundraiser.at(FundraiserAdresses[0]);
});

contract("Fundraiser test", (accounts) => {

	it('Fundraiser has an address', async () => {
    	assert.ok(FundraiserAdresses);
	});
    
	it('Fundraiser has minimumContribution', async () => {
    	minimumContribution = await fundraiser.minimumContribution.call(); 	 
    	assert.ok(minimumContribution);
	});
    
	it('has a donee', async () => {
		var doneeAddress = await fundraiser.donee.call();
    	assert.equal(doneeAddress, accounts[0]);
	});
    
	it('has a description', async () => {
    	var description = await fundraiser.donationDescription.call();
    	assert.equal(description, 'test Fundraiser App');
	});

	it('has a donation Goal', async () => {
    	var goal = await fundraiser.donationGoal.call();
    	assert.equal(goal, '6942069');
	});
    
	it('allows donators with minimum contribution', async () => {
    	var newDonator = accounts[1];
    	var newDonation = '10000000001';
    	await fundraiser.donate({from: newDonator, value: newDonation});
    	var isDonator = await fundraiser.donor.call(newDonator);
   	 
    	assert.ok(isDonator);
	});
    
	it('allows multiple donators to join the fundraiser', async () => {
    	var contribution = '1000000000001';
    	for (var i=2; i < 6; i++) {
        	await fundraiser.donate({from: accounts[i], value: contribution});
    	};
    	var numberDonators = await fundraiser.numberDonors.call();

        assert.equal(numberDonators, '5');
    });
   
	it('restricts donors without minimum contribution', async () => {
    	var nonDonor = accounts[6];
    	var newDontaion = '100';
    	try {
        	await fundraiser.support({from: nonDonor, value: newDonation});
    	} catch (error) {
        	assert(error);
    	}
    	var isSupporter = await fundraiser.donor.call(nonDonor);
    	assert.ok(!isSupporter);
	});
   

})

