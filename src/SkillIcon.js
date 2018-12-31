import React from 'react';

import Badge from './Badge';

const SkillIcon = props => {

  const { skill } = props;

  return (
    <Badge
      data={skill}
      shouldExpand={true}
    />
  );

}

export default SkillIcon;
