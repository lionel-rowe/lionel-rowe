import React from 'react';
import SkillIcon from './SkillIcon.js';
import { withNamespaces } from 'react-i18next';
import { Typography } from '@material-ui/core';

const SkillsSection = props => {
  const { t } = props;

  return (
    <section>
      <Typography variant='h1'>{t('ui.skills')}</Typography>
      <ul className='skills-list'>
        {t('skills', { returnObjects: true }).map((skill, idx) => <SkillIcon skill={skill} key={idx} />)}
      </ul>
    </section>
  );
}

export default withNamespaces('translations')(SkillsSection);
