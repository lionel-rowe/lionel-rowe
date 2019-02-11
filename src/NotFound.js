import React from 'react';

import { withNamespaces } from 'react-i18next';

import { Link } from '@reach/router';

import { Typography } from '@material-ui/core';

import { CtaButton } from './Buttons';

import Title from './Title';

const NotFound = props => {

  const { t } = props;

  return (
    <Title i18nKey='ui.notFoundTitle'>
      <section>
        <img
          src='images/Japanese_National_Route_Sign_0404.svg'
          alt=''
          style={{
            marginTop: 30,
            height: 200
          }}
        />
        <Typography variant='h1'>{t('ui.notFound')}</Typography>
        <CtaButton text={t('ui.backToHome')} component={Link} to='/' />
      </section>
    </Title>
  );
}

export default withNamespaces('translations')(NotFound);

