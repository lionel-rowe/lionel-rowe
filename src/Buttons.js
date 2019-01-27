import React from 'react';
import { withStyles, Button } from '@material-ui/core';

const styles = theme => ({
  root: {
    fontSize: '1em',
    margin: '20px 10px'
  }
});

const [ CtaButton, CancelButton ] = [

  props => { // CtaButton

    const { text, classes, shiny, oversized, ...passThroughProps } = props;

    console.log()

    return (
      <Button variant='contained' color='secondary' className={classes.root + (shiny ? ' shinyButton' : '')} {...passThroughProps}>
        {text}
      </Button>
    );
  },

  props => { // CancelButton

    const { text, classes, ...passThroughProps } = props;

    return (
      <Button className={classes.root} {...passThroughProps}>
        {text}
      </Button>
    );
  }

].map(el => withStyles(styles)(el));

export {
  CtaButton,
  CancelButton
};
