import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
  return (
    <div style={{ margin: '40px', width: '100%', textAlign: "center" }}>
      <a href="/" style={{ display: "inline-block", fontSize: "3rem" }}>
      Helping Hand
      </a>
    <Menu>

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
