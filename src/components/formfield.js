import React from 'react';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    width: 200,
  },
  menu: {
    width: 200,
  },
});

export class FormField extends React.Component {

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const fieldId = this.props.id
    const fieldLabel = this.props.label
    return (
      <form noValidate autoComplete="off">
        <TextField
          id={fieldId}
          label={fieldLabel}
          type="password"
          autoComplete="current-password"
          margin="normal"
        />
      </form>
    );
  }
}


export default withStyles(styles)(FormField);
