import React from 'react';
import { withNamespaces } from 'react-i18next';

import { Link } from '@reach/router';

import Mugshot from './Mugshot.js';
import CtaButton from './CtaButton.js';

import { Typography } from '@material-ui/core';

const IntroSection = props => {

  const { t } = props;

  return (
    <section>
      <Typography variant='h1'>{t('ui.about')}</Typography>

      <Mugshot path={t('photo.url')} alt={t('photo.alt')} scale={t('photo.scale')} />
      <Typography variant='body1'>{t('missionStatement')}</Typography>

      <CtaButton text={t('ctaViewMyWork')} component={Link} to='/work' />

    </section>
  );
}

export default withNamespaces('translations')(IntroSection);
