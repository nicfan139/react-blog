import React from 'react';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { SimpleMenu } from './menu';
import { Link } from 'react-router-dom';

const FontAwesome = require('react-fontawesome');

const styles = {
  appbarContainer: {
    width: "100vw",
    position: "fixed",
    top: 0
  },
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
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

export function ButtonAppBar(props) {
  return (
    <div style={styles.appbarContainer}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit" style={styles.flex}>
            <FontAwesome name='pen-square' />
            &nbsp;
            <strong>React Blog</strong>
          </Typography>
          <nav style={styles.tabs}>
            <Link to='/' style={styles.tab}>Home</Link>
            <Link to='/about' style={styles.tab}>About</Link>
            <Link to='/faq' style={styles.tab}>FAQ</Link>
          </nav>
          <SimpleMenu />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(ButtonAppBar);
