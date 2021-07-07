import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
  return (
    <div style={{ margin: '20px' }}>
      <div style={{textAlign: "center", fontSize: "3rem", margin: "3rem"}}>
       Helping Hand
      </div>
    <Menu>

      <Link route="/">
        <a className="item">Donations</a>
      </Link>

      <Menu.Menu position="right">
        <Link route="/">
          <a className="item">Fundraisers</a>
        </Link>

        <Link route="/fundraisers/new">
          <a className="item">+</a>
        </Link>
      </Menu.Menu>

    </Menu>
    </div>
  );
};
