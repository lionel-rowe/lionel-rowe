import React from 'react';

import { Scrollbars } from 'react-custom-scrollbars';

import { globalHistory } from '@reach/router';

const topNavMargin = 64; //TODO: add breakpoint - increases/decreases based on screen width
const bottomBarMargin = 56;
const totalNavHeight = topNavMargin + bottomBarMargin;


class CustomScrollbars extends React.Component {

  constructor(props) {
    super(props);
    this.scrollbarRef = React.createRef();
  }

  state = {
    removeHistoryListener: () => null
  }

  componentDidMount() {
    // `globalHistory.listen` returns a function that removes the listener
    const removeHistoryListener = globalHistory.listen(({ location, action }) => {
      //regadless of whether `action` is "PUSH" (nav to new location) or "POP" (back button)
      const interval = setInterval(() => {
        // horrible hack, necessary due to:
        // 1) scrollbars fail to rerender correctly when moving between routes if scroll-top is already 0
        // 2) setInterval with check on `globalHistory.transitioning` is necessary because globalHistory listener triggers before transition is complete
        if (!globalHistory.transitioning) {
          this.forceUpdate();
          this.scrollbarRef.current.scrollToTop();
          clearInterval(interval);
        }
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
    return (
      <Scrollbars
        hideTracksWhenNotNeeded={true}
        style={{
          width: '100vw',
          marginTop: topNavMargin,
          marginBottom: bottomBarMargin,
          height: `calc(100vh - ${totalNavHeight}px)`,
          cursor: 'default'
        }}

        renderThumbVertical={this.renderThumb}
        renderThumbHorizontal={this.renderThumb}

        ref={this.scrollbarRef}

        {...this.props}
      />
    );
  }
}

export default CustomScrollbars;
