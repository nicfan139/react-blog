import React from 'react';
import Button from 'material-ui/Button';
import { FormField } from '../components/formfield'


export class Login extends React.Component {
  render() {
    return (
      <div>
        <h2>Enter your credentials</h2>
        <FormField id="email-input" label="Email"/>
        <FormField id="password-input" label="Password"/>
        <Button variant="raised" color="primary">
          Login
        </Button>
      </div>
    )
  }
}
