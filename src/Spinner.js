import React from 'react';
import { withNamespaces } from 'react-i18next';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  container: {
    position: 'relative',
    width: 120,
    height: 120,
    margin: '50px auto'
  },
  outer: {
    animation: '1s spin infinite linear'
  },
  inner: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
  },
  '@keyframes spin': {
    from: {
      transform: 'rotate(0deg)'
    },
    to: {
      transform: 'rotate(360deg)'
    }
  }
});

const Spinner = props => {

  const { t, classes } = props;

  return (
    <div className={classes.container}>
      <img
        src='images/fidget_outer.png'
        title={t('ui.loading')}
        alt={t('ui.loading')}
        className={classes.outer}
      />
      <img
        src='images/fidget_inner.png'
        alt=''
        className={classes.inner}
      />
    </div>
  );
}

export default withNamespaces('translations')(withStyles(styles)(Spinner));
