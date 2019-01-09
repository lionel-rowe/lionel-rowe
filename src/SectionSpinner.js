import React from 'react';


import GridContainer from './GridContainer';
import Spinner from './Spinner';

const SectionSpinner = props => (
  <GridContainer>
    <Spinner scale={0.8} padding={70} />
  </GridContainer>
);

export default SectionSpinner;
