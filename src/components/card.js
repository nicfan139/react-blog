import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    minWidth: 275,
    margin: "10px 30px"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

export function AboutCard(props) {

  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="headline" component="h2">
            Info
          </Typography>
          <Typography color="textSecondary">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus totam molestias, voluptate corrupti! Quis fuga quam autem veritatis, dicta sequi odio saepe eius placeat dolore similique officiis quisquam blanditiis eveniet!
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default withStyles(styles)(AboutCard);
