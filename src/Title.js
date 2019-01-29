import React from 'react';
import { withNamespaces } from 'react-i18next';

class Title extends React.Component {

  setTitle = nextProps => {
    const { t, i18nKey } = nextProps || this.props;

    if (!nextProps || this.props.lng !== nextProps.lng) {
      document.title = `${t('ui.title')}${t('global.titleDelimiter')}${t(i18nKey)}`;
    }

    console.log(this.props.lng, nextProps && nextProps.lng);
  }

  componentDidMount = () => this.setTitle();

  UNSAFE_componentWillReceiveProps = nextProps => this.setTitle(nextProps);

  render() {
    const { children } = this.props;

    return <React.Fragment children={children} />;
  }
}

export default withNamespaces('translations')(Title);
