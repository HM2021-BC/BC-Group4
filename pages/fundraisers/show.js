import React, { Component } from 'react';
import { Card, Grid, Button } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';
import { Link } from '../../routes';

class CampaignShow extends Component {
  static async getInitialProps(props) {
    const fundraiser = Campaign(props.query.address);

    const summary = await fundraiser.methods.getSummary().call();

    return {
      address: props.query.address,
      minimumContribution: summary[0],
      balance: summary[1],
      numbersDonors: summary[2],
      donee: summary[3]
    };
  }

  renderCards() {
    const {
      balance,
      donee,
      minimumContribution,
      donationGoal,
      numbersDonors
    } = this.props;

    const items = [
      {
        header: donee,
        meta: 'Address of the Recipient of the Donation',
        description:
          'The Donee creates this Fundraiser to find people willing to Donate to his cause',
        style: { overflowWrap: 'break-word' }
      },
      {
        header: minimumContribution,
        meta: 'Minimum Contribution (wei)',
        description:
          'You must contribute at least this much wei'
      },
      {
        header: donationGoal,
        meta: 'Money that needs to be raise to achieve the Fundraisers  Goal',
        description:
          'Goal of the Donation in Money'
      },
      {
        header: numbersDonors,
        meta: 'Number of Supporters',
        description:
          'Number of people who have already donated to the Fundraiser'
      },
      {
        header: web3.utils.fromWei(balance, 'ether'),
        meta: 'Fundraiser Balance (ether)',
        description:
          'The balance is how much money this Funderaiser has Collected.'
      }
    ];

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <h3>Campaign Show</h3>
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>{this.renderCards()}</Grid.Column>

            <Grid.Column width={6}>
              <ContributeForm address={this.props.address} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    );
  }
}

export default CampaignShow;
