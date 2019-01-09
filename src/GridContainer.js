import React from 'react';
import { Grid } from '@material-ui/core';

export default props => (
  <Grid
    container
    direction='row'
    justify='center'
    alignItems='center'
    style={{padding: '0 20px'}}
    {...props}
  />
);

