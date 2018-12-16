import React, { Component } from 'react';
import SkillIcon from './SkillIcon.js';
import { withNamespaces } from "react-i18next";

class SkillsSection extends Component {
  render() {
    const { t } = this.props;

    return (
      <section className='row'>
        <div className='col-sm'>
          <h2 id='skills'>Skills</h2>
          <ul className='skills-list'>

            {t('skills', { returnObjects: true }).map((skill, idx) => <SkillIcon skill={skill} key={idx} />)}
          </ul>
        </div>
      </section>
    );
  }
}

export default withNamespaces("translations")(SkillsSection);
