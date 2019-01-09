import React from 'react';

import { Scrollbars } from 'react-custom-scrollbars';

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
    removeHistoryListener: () => null
  }

  componentDidMount() {
    // `globalHistory.listen` returns a function that removes the listener

    if (isMobile) {
      // reflowOnMobileZoom(this.scrollbarRef.current);
      reflowOnMobileZoom(document.querySelector('#foreground'));
    }

    const removeHistoryListener = globalHistory.listen(({ location, action }) => {
      //regadless of whether `action` is "PUSH" (nav to new location) or "POP" (back button)
      const interval = setInterval(() => {
        // horrible hack, necessary due to:
        // 1) scrollbars fail to rerender correctly when moving between routes if scroll-top is already 0
        // 2) setInterval with check on `globalHistory.transitioning` is necessary because globalHistory listener triggers before transition is complete
        if (isMobile) {
          window.scrollTo(0, 0);
          clearInterval(interval);
        } else if (!globalHistory.transitioning) {
          this.forceUpdate();
          this.scrollbarRef.current.scrollToTop();
          clearInterval(interval);        }
      }, 50);
    });

    this.setState({ removeHistoryListener });
  }

  renderThumb() {
      //same as defaults but sans `cursor: pointer` style
      const style = {
          borderRadius: 'inherit',
          backgroundColor: 'rgba(0,0,0,.2)'
      };
      return <div style={style} />;
  }

  componentWillUnmount() {
    this.removeHistoryListener();
  }

  render() {
    const { classes, ...passThroughProps } = this.props;

    return !isMobile ? (
      <Scrollbars

        id='customScrollbars'

        hideTracksWhenNotNeeded={true}

        className={[classes.customScrollbars, classes.scrollArea].join(' ')}

        renderThumbVertical={this.renderThumb}
        renderThumbHorizontal={this.renderThumb}

        ref={this.scrollbarRef}

        {...passThroughProps}
      />
    ) : (
      <div
        ref={this.scrollbarRef}
        className={[classes.notSoCustomScrollbars, classes.scrollArea].join(' ')}
        {...passThroughProps}
      />
    );
  }
}

export default withStyles(styles)(ScrollArea);
