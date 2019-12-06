import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import SimpleMenu from './SimpleMenu';
import { Link } from 'react-router-dom';

const FontAwesome = require('react-fontawesome');

const styles = {
  navbarContainer: {
    width: "100vw",
    position: "fixed",
    top: 0,
    zIndex: 100
  },
  flex: {
    flex: 1,
  },
  logo: {
    textDecoration: "none",
    color: "white",
  },
  tabs: {
    display: "flex",
    justifyContent: "space-around"
  },
  tab: {
    padding: "10px 30px",
    textDecoration: "none",
    fontWeight: "bold",
    color: "white",
  }
};

const Navbar = props => {
  return (
    <div style={styles.navbarContainer}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit" style={styles.flex}>
            <Link to='/' style={styles.logo}>
              <FontAwesome name='pen-square' />
              &nbsp;
              <strong>React Blog</strong>
            </Link>
          </Typography>
          <nav style={styles.tabs}>
            <Link to='/about' style={styles.tab}>About</Link>
            <Link to='/faq' style={styles.tab}>FAQ</Link>
          </nav>
          <SimpleMenu />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;