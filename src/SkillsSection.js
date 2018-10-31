import React, { Component } from 'react';
import * as data from './en_US.json'
import SkillIcon from './SkillIcon.js';

const skills = data.skills;

export default class SkillsSection extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col-sm'>
          <h2 id='skills'>Skills</h2>
          <ul style={{listStyleType: 'none', paddingLeft: 0}}>
            {skills.map((skill, idx) => <SkillIcon skill={skill} key={idx} />)}
          </ul>
        </div>
      </div>
    );
  }
}
