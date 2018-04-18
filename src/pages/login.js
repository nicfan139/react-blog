import React from 'react';
import Button from 'material-ui/Button';
import { FormField } from '../components/formfield'

const styles = {
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
      <div>
        <h2 style={styles.formTitle}>Enter your credentials</h2>
        <FormField id="email-input" label="Email"/>
        <FormField id="password-input" label="Password"/>
        <Button variant="raised" color="primary" style={styles.submitButton}>
          Login
        </Button>
      </div>
    )
  }
}
