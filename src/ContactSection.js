import React from 'react';

import { TextField } from '@material-ui/core';

import { withNamespaces } from 'react-i18next';
import { Typography } from '@material-ui/core';

import CtaButton from './CtaButton.js';

const ContactSection = props => {

  const { t } = props;

  return (
    <section>

      <Typography variant='h1'>{t('ui.contact')}</Typography>

      <form action='' method='post'>

        <TextField
          id='email'
          name='email'
          label={t('ui.email.yourEmail')}
          type='email'
          autoComplete='email'
          fullWidth
          margin='normal'
          autoFocus={true}
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

