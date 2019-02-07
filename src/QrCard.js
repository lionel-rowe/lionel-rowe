import React from 'react';

import { withStyles, Card, Typography } from '@material-ui/core';

import { AccountCircle } from '@material-ui/icons';

const styles = theme => ({
  root: {
    position: 'absolute',
    top: '75%',
    width: 120,
    left: '50%',
    transform: 'translateX(-50%)',
    padding: theme.spacing.unit * 2
  },
  typography: {
    // margin: theme.spacing.unit * 2,
  },
});

const QrCard = props => {

  const { classes, open, managedActive, title, account, qr, ...passThroughProps } = props;

  return (
    <Card
      className={classes.root}
      elevation={16}
      style={{
        marginTop: '1rem',
        zIndex: 1000
      }}
      hidden={!open}
      {...passThroughProps}
    >
      <Typography variant="h5" component="h2" className={classes.typography}>
        {title}
      </Typography>

      <Typography variant="body1" component="p">
        <AccountCircle
          style={{
            verticalAlign: 'text-bottom',
            fontSize: '1.2em',
            color: '#888'
          }}

        />
        {' '}
        {account}
      </Typography>

      <div
        dangerouslySetInnerHTML={{__html: qr}}
      />
    </Card>
  );
}

export default withStyles(styles)(QrCard);
