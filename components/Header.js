import React from 'react';
import { Menu, Button } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
  return (
    <div>
    <a href="/" style={{ margin: '40px', width: '100%', textAlign: "center", display: "inline-block", fontSize: "3rem" }}>
    Helping Hand
    </a>
  <Menu>
    <Link>
    <a href="/" style={{marginButtom:"1%", marginLeft:"4px"}}>
          <Button
            content="Helping Hand"
            primary
          />
        </a>
    </Link>

    <Menu.Menu position="right">
      <Link>
        <a href="/fundraisers/new" style={{marginRight:""}}>
          <Button
            content="Create Fundraiser"
            icon="add circle"
            primary
          />
        </a>
      </Link>
    </Menu.Menu>

  </Menu>
  </div>
  );
};
