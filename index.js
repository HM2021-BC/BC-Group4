import web3 from './ethereum/web3';
import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';
import { Link } from '../routes';

class CampaignIndex extends Component {
  static async getInitialProps() {
    const fundraisers = await factory.methods.getDeployedFundraisers().call();
    return { fundraisers };
  }

  renderCampaigns() {
    const items = this.props.fundraisers.map(address => {
      return {
        header: address,
        description: (
          <Link route={`/fundraisers/${address}`}>
            <a>View Fundraisers</a>
          </Link>
        ),
        fluid: true
      };
    });

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <div>
          <h1>Open Fundraiser</h1>

          <Link route="/fundraisers/new">
            <a>
              <Button
                floated="right"
                content="Create Fundraiser"
                icon="add circle"
                primary
              />
            </a>
          </Link>

          {this.renderCampaigns()}
        </div>
      </Layout>
    );
  }
}

export default CampaignIndex;
