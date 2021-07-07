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
      donee: summary[3],
      donationDescription: summary[4],
      donationGoal: summary[5]
    };
  }

  renderCards() {
    const {
      balance,
      donee,
      minimumContribution,
      donationGoal,
      numbersDonors,
      donationDescription
    } = this.props;

    const items = [
      {
        header: donee,
        meta: 'Address of the donation recipient.',
        description:
          'The donor creates this donation appeal to find people who are willing to donate to his cause.',
        style: { overflowWrap: 'break-word' }
      },
      {
        header: minimumContribution,
        meta: 'Minimum Contribution (in wei)',
        description:
          'The minimum amount that must be donated.'
      },
      {
        header: donationGoal,
        meta: 'Donation Goal',
        description:
          'The amount of money that must be reached to fulfil the purpose of the donation.'
      },
      {
        header: numbersDonors,
        meta: 'Number of Supporters',
        description:
          'The number of people who have already participated in the Fundraiser.'
      },
      {
        header: donationDescription,
        meta: 'The Fundraiser description.',
      },
      {
        header: web3.utils.fromWei(balance, 'ether'),
        meta: 'Fundraiser Balance (in ether)',
        description:
          'The balance indicates how much money has been collected so far.'
      }
    ];

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <h3>Fundraiser Details</h3>
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
