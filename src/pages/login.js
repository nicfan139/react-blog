import React from 'react';
import Button from 'material-ui/Button';
import { FormField } from '../components/formField';
import { PasswordField } from '../components/passwordField';
const FontAwesome = require('react-fontawesome');

const styles = {
  background: {
    backgroundImage: "url('https://images.unsplash.com/photo-1502472584811-0a2f2feb8968?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dcd916e8308d119631edcd7178858f46&auto=format&fit=crop&w=1350&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "90vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  whiteBox: {
    backgroundColor: "rgba(255,255,255,0.9)",
    borderRadius: 5,
    padding: "20px 40px",
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

export class Login extends React.Component {
  render() {
    return (
      <div style={styles.background}>
        <div style={styles.whiteBox}>
          <h2 style={styles.formTitle}>
            Enter your credentials&nbsp;&nbsp;<FontAwesome name="sign-in-alt"/>
          </h2>
          <FormField id="email-input" label="Email"/>
          <PasswordField id="password-input" label="Password"/>
          <Button variant="raised" color="primary" style={styles.submitButton}>
            <strong>Login</strong>
          </Button>
        </div>
      </div>
    )
  }
}
