import React from 'react';

import { withNamespaces } from 'react-i18next';
import { withStyles } from '@material-ui/core';

//https://loading.io/css/

const styles = theme => {

  const glowSpec = () => 'glow 3s linear infinite alternate';
  const spinSpec = delay => `spin 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite ${delay}s`;

  return {
    container: {
      position: 'relative',
      width: 120,
      height: 120,
    },
    ldsRing: {
      display: 'inline-block',
      position: 'relative',
      width: 64,
      height: 64,
    },
    ldsRingInner: {
      boxSizing: 'border-box',
      display: 'block',
      position: 'absolute',
      width: 51,
      height: 51,
      margin: 6,
      border: '6px solid #fff',
      borderRadius: '50%',
      borderColor: `${theme.palette.tertiary.main} transparent transparent transparent`,
    },
    first: {
      animation: [ glowSpec(), spinSpec(-0.45) ].join(', '),
    },
    second: {
      animation: [ glowSpec(), spinSpec(-0.3) ].join(', '),
    },
    third: {
      animation: [ glowSpec(), spinSpec(-0.15) ].join(', '),
    },
    '@keyframes spin': {
      '0%': {
        transform: 'rotate(0deg)',
      },
      '100%': {
        transform: 'rotate(360deg)',
      },
    },
    '@keyframes glow': {
      '0%': {
        borderColor: `${theme.palette.secondary.main} transparent transparent transparent`,
      },
      '100%': {
        borderColor: `${theme.palette.tertiary.main} transparent transparent transparent`,
      },
    },
  };
};

class Spinner extends React.Component {

  render() {

    const { t, classes, scale, padding } = this.props;

    return (
      <div style={{padding: padding}}>
        <div
          className={classes.container}
          style={{
            zoom: scale && `${Math.ceil(scale * 100)}%`,
            margin: '0 auto',
          }}
        >
          <div
            className={classes.ldsRing}
            aria-label={t('ui.loading')}
          >
            <div className={[classes.ldsRingInner, classes.first].join(' ')}></div>
            <div className={[classes.ldsRingInner, classes.second].join(' ')}></div>
            <div className={[classes.ldsRingInner, classes.third].join(' ')}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default withNamespaces('translations')(withStyles(styles)(Spinner));
