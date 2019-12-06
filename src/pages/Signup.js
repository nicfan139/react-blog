import React from 'react';
import Button from 'material-ui/Button';
import FormField from '../components/FormField';
import PasswordField from '../components/PasswordField';
const FontAwesome = require('react-fontawesome');

const styles = {
  background: {
    backgroundImage: "url('https://images.unsplash.com/photo-1510279770292-4b34de9f5c23?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=aae475523c9a1ac88897f03a286fff6f&auto=format&fit=crop&w=1350&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "90vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  whiteBox: {
    width: 350,
    height: 400,
    backgroundColor: "rgba(255,255,255,0.9)",
    borderRadius: 5,
    boxShadow: "0px 2px 3px 2px rgba(50,50,50,0.4)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  formTitle: {
    margin: "30px auto 5px"
  },
  submitButton: {
    margin: "25px auto"
  }
}

class Signup extends React.Component {
  render() {
    return (
      <div style={styles.background}>
        <div style={styles.whiteBox}>
          <h2 styles={styles.submitButton}>
            Create an account&nbsp;&nbsp;<FontAwesome name="user-plus" />
          </h2>
          <FormField id="name-input" label="Name"/>
          <FormField id="email-input" label="Email"/>
          <PasswordField id="password-input" label="Password"/>
          <Button variant="raised" color="primary" style={styles.submitButton}>
            <strong>Sign up!</strong>
          </Button>
        </div>
      </div>
    )
  }
}

export default Signup;