import React from 'react';

import { withNamespaces } from 'react-i18next';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  container: {
    position: 'relative',
    width: 120,
    height: 120,
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

const SPEEDS = [ 1, .5, .25, .125 ];

class Spinner extends React.Component {

  state = {
    speedIndex: 0
  };

  handleClick = e => {
    this.setState({ speedIndex: (this.state.speedIndex + 1) % SPEEDS.length });
  };

  render() {

    const { t, classes, scale, padding } = this.props;

    return (
      <div style={{
        padding: padding
      }}>
        <div
          className={classes.container}
          style={{
            zoom: scale && `${Math.ceil(scale * 100)}%`,
            margin: '0 auto',
          }}
          onClick={e => this.handleClick(e)}
        >
          <img
            src='images/fidget_outer.png' //https://pixabay.com/en/fidget-spinner-grey-stress-relax-2430786/
            alt={t('ui.loading')}
            style={{
              animation: `${SPEEDS[this.state.speedIndex]}s spin infinite linear`
            }}
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
}

export default withNamespaces('translations')(withStyles(styles)(Spinner));
