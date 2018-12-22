import React from 'react';

import { withNamespaces } from 'react-i18next';

import ProjectCard from './ProjectCard.js';

import { Grid, Typography } from '@material-ui/core';

const WorkSection = props => {

  const { t } = props;

  return (
    <section style={{width: '100%'}}>
      <Typography variant='h1'>{t('ui.work')}</Typography>
      <Grid
        container
        direction='row'
        justify='space-evenly'
        style={{padding: 0}}
      >
        {t('projects', { returnObjects: true }).map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </Grid>
    </section>
  );
}

export default withNamespaces('translations')(WorkSection)
