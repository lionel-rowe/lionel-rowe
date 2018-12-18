import React from 'react';

import { withNamespaces } from 'react-i18next';

import ProjectCard from './ProjectCard.js';

import { Typography } from '@material-ui/core';

const WorkSection = props => {

  const { t } = props;

  return (
    <section>
      <Typography variant='h1'>{t('ui.work')}</Typography>
      <div>
        {t('projects', { returnObjects: true }).map((project, idx) => <ProjectCard key={idx} {...project} />)}
      </div>
    </section>
  );
}

export default withNamespaces('translations')(WorkSection)
