/* 🥚 */

import React from 'react';

import Spinner from './Spinner';
import Title from './Title';

const StandaloneSpinner = props => {

  return (
    <Title i18nKey='ui.egg'>
      <section>
        <Spinner scale={0.8} padding={70} />
      </section>
    </Title>
  );
}

export default StandaloneSpinner;
