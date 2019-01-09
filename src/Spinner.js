import React from 'react';

import { withNamespaces } from 'react-i18next';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  container: {
    position: 'relative',
    width: 120,
    height: 120,
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

  const { t, classes, scale, padding } = props;

  return (
    <div style={{
      padding: padding
    }}>
      <div className={classes.container} style={{
        zoom: scale && `${Math.ceil(scale * 100)}%`
      }}>
        <img
          src='images/fidget_outer.png' //https://pixabay.com/en/fidget-spinner-grey-stress-relax-2430786/
          alt={t('ui.loading')}
          className={classes.outer}
        />
        <img
          src='images/fidget_inner.png'
          alt=''
          className={classes.inner}
        />
      </div>
    </div>
  );
}

export default withNamespaces('translations')(withStyles(styles)(Spinner));
