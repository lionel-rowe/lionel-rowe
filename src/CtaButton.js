import React from 'react';
import { withStyles, Button } from '@material-ui/core';

const styles = theme => ({
  root: {
    fontSize: '1em',
    margin: '20px 0'
  }
});

const CtaButton = props => {

  const { text, classes, ...passThroughProps } = props;

  return (
    <Button variant='contained' color='secondary' className={classes.root} {...passThroughProps}>
      {text}
    </Button>
  );
};

export default withStyles(styles)(CtaButton);
