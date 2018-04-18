import React from 'react';
import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import Divider from 'material-ui/Divider';
import { Link } from 'react-router-dom';
const FontAwesome = require('react-fontawesome');

const styles = {
  btn: {
    color: "white"
  },
  menuLink: {
    color: "black",
    textDecoration: "none"
  }
}

export class SimpleMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <Button
          style={styles.btn}
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MenuIcon />
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem><Link to='/signup' style={styles.menuLink}><FontAwesome name='user-plus' />&nbsp;&nbsp;Sign-up!</Link></MenuItem>
          <Divider />
          <MenuItem><Link to='/login' style={styles.menuLink}><FontAwesome name='sign-in-alt' />&nbsp;&nbsp;&nbsp;Login</Link></MenuItem>
        </Menu>
      </div>
    );
  }
}

