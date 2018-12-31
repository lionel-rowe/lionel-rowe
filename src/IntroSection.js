import React from 'react';
import { withNamespaces } from 'react-i18next';

import { Link } from '@reach/router';

import Mugshot from './Mugshot';
import CtaButton from './CtaButton';

import { Grid, Typography } from '@material-ui/core';

const IntroSection = props => {

  const { t } = props;

  return (
    <Grid item xs={12} sm={10} md={10} lg={8} xl={6} component='section'>
      <Typography variant='h1'>{[t('fullName'), t('tagline')].join(' — ')}</Typography>

      <Mugshot path={t('photo.url')} alt={t('photo.alt')} scale={t('photo.scale')} />
      <Typography variant='body1'>{t('missionStatement')}</Typography>

      <CtaButton text={t('ctaViewMyWork')} component={Link} to='/work' />
    </Grid>
  );
}

export default withNamespaces('translations')(IntroSection);
