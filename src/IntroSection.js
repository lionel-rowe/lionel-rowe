import React, { Component } from 'react';
import { withNamespaces } from "react-i18next";

import Mugshot from './Mugshot.js';

class IntroSection extends Component {
  render() {

    const { t } = this.props;

    return (
      <section className='row'>
        <div className='col-sm'>
          <h1 id='intro'>{t('fullName')}</h1>
          <Mugshot path={t('photo.url')} alt={t('photo.alt')} scale={t('photo.scale')} />
          <p>{t('missionStatement')}</p>
        </div>
      </section>
    );
  }
}

export default withNamespaces("translations")(IntroSection);
