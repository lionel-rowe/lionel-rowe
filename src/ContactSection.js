import React from 'react';

import { withNamespaces } from 'react-i18next';

import { Typography } from '@material-ui/core';

import Title from './Title';
import Badge from './Badge';
import BadgeHoverQr from './BadgeHoverQr';
import EmailContactForm from './EmailContactForm';

const ContactSection = props => {

  const { t } = props;

  return (
    <Title i18nKey='ui.contact'>
      <section>
        <Typography variant='h1'>{t('ui.contact')}</Typography>

        <div style={{
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-around'
        }}>
          <Badge data={{
            icon: 'fab github',
            title: t('ui.github'),
            url: t('contactInfo.github'),
            color: '#302f2f'
          }} />
          <BadgeHoverQr data={{
            icon: 'fab weixin',
            title: t('ui.weixin'),
            qr: t('contactInfo.weixin.qr'),
            account: t('contactInfo.weixin.account'),
            color: '#00d00d',
          }} />
          <Badge data={{
            icon: 'fab linkedin',
            title: t('ui.linkedin'),
            url: t('contactInfo.linkedin'),
            color: '#0273b2'
          }} />
        </div>

        <EmailContactForm />
      </section>
    </Title>
  );
}

export default withNamespaces('translations')(ContactSection);
