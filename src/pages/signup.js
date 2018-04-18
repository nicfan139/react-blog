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

export class Signup extends React.Component {
  render() {
    return (
      <div>
        <h2 styles={styles.submitButton}>Create an account</h2>
        <FormField id="name-input" label="Name"/>
        <FormField id="email-input" label="Email"/>
        <FormField id="password-input" label="Password"/>
        <Button variant="raised" color="primary" style={styles.submitButton}>
          Sign up!
        </Button>
      </div>
    )
  }
}
