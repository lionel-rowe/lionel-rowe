import React from 'react';

import { withStyles } from '@material-ui/core';

import { globalHistory } from '@reach/router';

import detectMobileBrowser from './detectMobileBrowser';

import reflowOnMobileZoom from './reflowOnMobileZoom';

import contentAreaBreakpoints from './contentAreaBreakpoints';

const isMobile = detectMobileBrowser();

const styles = contentAreaBreakpoints;

class ScrollArea extends React.Component {

  constructor(props) {
    super(props);
    this.scrollbarRef = React.createRef();
  }

  state = {
    removeHistoryListener: () => null,
    timeout: -1
  }

  componentDidMount() {
    // `globalHistory.listen` returns a function that removes the listener

    if (isMobile) {
      // reflowOnMobileZoom(this.scrollbarRef.current);
      reflowOnMobileZoom(document.querySelector('#foreground'));
    }

    const removeHistoryListener = globalHistory.listen(({ location, action }) => {
      //regadless of whether `action` is "PUSH" (nav to new location) or "POP" (back button)
      const timeout = setTimeout(() => {
        window.scrollTo(0, 0);
        // TODO: fix root cause and remove hack
      }, 100);

      this.setState({ timeout });
    });

    this.setState({ removeHistoryListener });
  }

  componentWillUnmount() {
    this.state.removeHistoryListener();
    clearTimeout(this.state.timeout);
  }

  render() {
    const { classes, ...passThroughProps } = this.props;

    return (
      <div
        ref={this.scrollbarRef}
        className={[classes.notSoCustomScrollbars, classes.scrollArea].join(' ')}
        {...passThroughProps}
      />
    );
  }
}

export default withStyles(styles)(ScrollArea);
