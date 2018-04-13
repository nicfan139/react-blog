import React from 'react';
import Button from 'material-ui/Button';
import { FormField } from '../components/formfield'


const styles = {
}

export class Signup extends React.Component {
  render() {
    return (
      <div>
        <h2>Create an account</h2>
        <FormField id="name-input" label="Name"/>
        <FormField id="email-input" label="Email"/>
        <FormField id="password-input" label="Password"/>
        <Button variant="raised" color="primary">
          Sign up!
        </Button>
      </div>
    )
  }
}
