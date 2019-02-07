import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import CustomTooltip from './CustomTooltip';

class Badge extends Component {

  constructor(props) {
    super(props);
    this.linkRef = React.createRef();
    this.hasLinkRefFocus = this.hasLinkRefFocus.bind(this);
  }

  hasLinkRefFocus = () => document.activeElement === this.linkRef.current;

  state = {
    active: false
  };

  setActive = bool => {
    this.setState({active: bool});
    if (this.props.handleActive) this.props.handleActive(bool);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (!this.state.deactivate && nextProps.deactivate) {
      this.setActive(false);
    }
  }

  render() {
    const { data, shouldExpand, handleActive, shouldManageDeactivate, deactivate, shouldShowTooltip, styles, ...passThroughProps } = this.props;

    const willShowTooltip = shouldShowTooltip !== false;

    const { active } = this.state;

    // const { active } = this.state;

    return (

      <a
        href={data.url}
        ref={this.linkRef}
        target='_blank'
        tabIndex={0}
        rel='noopener noreferrer'
        onFocus={() => this.setActive(true)}
        onBlur={() => !shouldManageDeactivate && this.setActive(false)}
        style={{
          outline: 'none',
          ...(styles && styles.a)
        }}
      >
        <div
          className='badge'
          style={{
            width: shouldExpand ? null : '1.5em',
            height: shouldExpand ? null : '1.5em',
            position: 'relative',
            padding: shouldExpand ? 30 : 0
          }}
          onMouseEnter={() => this.setActive(true)}
          onMouseLeave={() => {
            if (!this.hasLinkRefFocus() && !shouldManageDeactivate) {
              this.setActive(false);
            }
          }}
          ref={this.props.iconRef || null}

        >
          <CustomTooltip
            title={
              willShowTooltip ? data.title : ''
              /* empty string suppresses tooltip, whereas `null` or `undefined` don't */
            }
            open={willShowTooltip && active}
          >
            <FontAwesomeIcon
              role='button'
              className='badge-inner'
              icon={data.icon.split(' ')}
              style={active
                ? {
                  color: data.color,
                  fontSize: shouldExpand && '1.5em',
                  outline: 'none'
                }
                : {
                  outline: 'none'
                }
              }
              {...passThroughProps}
            />

          </CustomTooltip>
          <span className='sr-only'>{data.title}</span> {/* also `grep`able! */}
        </div>
      </a>
    );
  }
}

export default Badge;
