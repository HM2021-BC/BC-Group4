import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';
import { Link } from '../routes';
import { SocialIcon } from 'react-social-icons';
import Campaign from '../ethereum/campaign';

class CampaignIndex extends Component {
  static async getInitialProps() {
    const fundraisers = await factory.methods.getDeployedFundraisers().call();

    const funds = [];

    for (let address of fundraisers) {
      const fundraiser = Campaign(address);
      const summary = await fundraiser.methods.getSummary().call();
      let item = {
        title: summary["4"],
        address: address,
      }
      funds.push(item);
    }
    
    return { fundraisers, funds };
  }

  renderCampaigns() {
    const items = this.props.funds.map(item => {
      return {
        header: item.title,
        description: (
          <html>
            <Link route={`/fundraisers/${item.address}`}>
                <a>View Fundraiser Details</a>
              </Link>
              <div class="icons" style={{float:"right"}}>
                <SocialIcon url="https://twitter.com/"/>
                <div style={{display:"inline-block", width: "5px"}}></div>
                <SocialIcon url="https://facebook.com/"/>
                <div style={{display:"inline-block", width: "5px"}}></div>
                <SocialIcon url="https://instagram.com/"/>
              </div>
          </html>
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
          <h3>Overview Fundraisers</h3>

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
