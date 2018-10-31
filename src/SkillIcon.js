import React, { Component } from 'react';

export default class SkillIcon extends Component {

  state = {hovered: false}

  render() {
    const skill = this.props.skill;
    return (
      <li className='skill-icon' style={{position: 'relative'}}>
        <i
          className={skill.icon + ' skill-icon-inner'}
          title={skill.desc}
          onMouseEnter={() => this.setState({hovered: true})}
          onMouseLeave={() => this.setState({hovered: false})}
          style={{color: this.state.hovered ? skill.color : null}}
        ></i>
        {' '}
        <span className='invisigreppable'>{skill.desc}</span>
      </li>
    );
  }
}




