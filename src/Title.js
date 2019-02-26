import React, { useEffect } from 'react';
import { withNamespaces } from 'react-i18next';

const Title = props => {
  const { t, i18nKey, children } = props;

  useEffect(() => {
    document.title = `${t('ui.title')}${t('global.titleDelimiter')}${t(i18nKey)}`;
  });

  return <React.Fragment children={children} />;
}

export default withNamespaces('translations')(Title);
