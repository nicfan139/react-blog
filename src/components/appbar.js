import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import { SimpleMenu } from './menu';
import { Link } from 'react-router-dom'

const styles = {
  wide: {
    width: "100vw"
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
  const { classes } = props;
  return (
    <div style={styles.wide}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit" style={styles.flex}>
            React Blog
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
