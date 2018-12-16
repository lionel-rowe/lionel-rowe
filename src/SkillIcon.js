import React, { Component } from 'react';

export default class SkillIcon extends Component {

  state = {hovered: false}

  render() {
    const skill = this.props.skill;
    return (
      <a href={skill.url} target='_blank' rel='noopener noreferrer'>
        <li
          className='skill-icon'
          style={{position: 'relative'}}
          onMouseEnter={() => this.setState({hovered: true})}
          onMouseLeave={() => this.setState({hovered: false})}
          title={this.state.hovered ? skill.desc : null /*
          must be set to null on mouseleave, otherwise enlarged icon size may cause wrong title to display
          */}
        >
          <i
            className={skill.icon + ' skill-icon-inner'}
            style={this.state.hovered
              ? {
                color: skill.color,
                fontSize: '1.5em'
              }
              : null
            }
          >
            <span className='sr-only'>{skill.desc}</span> {/* also `grep`able! */}
          </i>
        </li>
      </a>
    );
  }
}




