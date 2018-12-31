import React from 'react';

import { TextField } from '@material-ui/core';

import { withNamespaces } from 'react-i18next';
import { Typography } from '@material-ui/core';

import CtaButton from './CtaButton';
import Badge from './Badge';
import BadgeHoverQr from './BadgeHoverQr';

const ContactSection = props => {

  const { t } = props;

  return (
    <section>
      <Typography variant='h1'>{t('ui.contact')}</Typography>

      <Badge data={{
        icon: 'fab github',
        title: 'Github',
        url: t('contactInfo.github'),
        color: '#302f2f'
      }} />
      <BadgeHoverQr
        data={{
          icon: 'fab weixin',
          title: 'WeChat',
          qr: t('contactInfo.weixin.qr'),
          account: t('contactInfo.weixin.account'),
          color: '#00d00d',
        }}
      />
      <Badge data={{
        icon: 'fab linkedin',
        title: 'LinkedIn',
        url: t('contactInfo.linkedin'),
        color: '#0273b2'
      }} />

      <form action='' method='post'>

        <TextField
          id='email'
          name='email'
          label={t('ui.email.yourEmail')}
          type='email'
          autoComplete='email'
          fullWidth
          margin='normal'
        />

        <TextField
          id='subject'
          name='subject'
          label={t('ui.email.subject')}
          defaultValue='Hi!'
          fullWidth
          margin='normal'
        />

        <TextField
          id='body'
          name='body'
          label={t('ui.email.body')}
          multiline
          rows='8'
          fullWidth
          margin='normal'
          variant='filled'
        />

        <CtaButton text={t('ui.email.send')} type='submit' />

      </form>
    </section>
  );
}

export default withNamespaces('translations')(ContactSection)

