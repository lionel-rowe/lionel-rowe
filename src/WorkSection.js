import React from 'react';

import { withNamespaces } from 'react-i18next';

import ProjectCard from './ProjectCard.js';

import { Grid, Typography } from '@material-ui/core';

const WorkSection = props => {

  const { t } = props;

  return (
    <section>
      <Typography variant='h1'>{t('ui.work')}</Typography>
      <div>

      <Grid
        container
        direction='row'
        justify='space-around'
        style={{padding: 0}}
      >

        {t('projects', { returnObjects: true }).map((project, idx) => (
          <Grid item
            key={idx}
            xs={12} sm={12} md={6} lg={6} xl={4}
            component={() => <ProjectCard {...project} />}
          />
        ))}

      </Grid>

      </div>
    </section>
  );
}

export default withNamespaces('translations')(WorkSection)
