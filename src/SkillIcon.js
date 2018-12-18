import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Tooltip } from '@material-ui/core';

class SkillIcon extends Component {

  constructor(props) {
    super(props);
    this.linkEl = React.createRef();
    this.hasLinkElFocus = this.hasLinkElFocus.bind(this);
  }

  hasLinkElFocus = () => document.activeElement === this.linkEl.current;

  state = {
    fauxcused: false
  };

  render() {
    const { skill } = this.props;

    return (

      <a
        href={skill.url}
        ref={this.linkEl}
        target='_blank' rel='noopener noreferrer'
        onFocus={() => this.setState({fauxcused: true})}
        onBlur={() => this.setState({fauxcused: false})}
        style={{outline: 'none'}}
      >
        <li
          className='skill-icon'
          style={{position: 'relative'}}
          onMouseEnter={() => this.setState({fauxcused: true})}
          onMouseLeave={() => {
            if (!this.hasLinkElFocus()) {
              this.setState({fauxcused: false});
            }
          }}
        >

        <Tooltip
          title={skill.desc}
          open={this.state.fauxcused}
        >

          <FontAwesomeIcon className='skill-icon-inner' icon={skill.icon.split(' ')}

          style={this.state.fauxcused
            ? {
              color: skill.color,
              fontSize: '1.5em',
              outline: '0px solid black'
            }
            : null
          }

          />

          </Tooltip>
          <span className='sr-only'>{skill.desc}</span> {/* also `grep`able! */}
        </li>
      </a>
    );
  }
}

export default SkillIcon;
