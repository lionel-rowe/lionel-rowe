export default theme => {

  const { minHeight, ...toolbarBreakpoints } = theme.mixins.toolbar;

  const bottomBarMargin = minHeight;

  const topNavMargins = Object.keys(toolbarBreakpoints).reduce((obj, key) => {
    obj[key] = toolbarBreakpoints[key].minHeight;
    return obj;
  }, {'@media all': minHeight});

  const totalHeightsMinusNavs = Object.keys(topNavMargins).reduce((obj, key) => {
    // obj[key] = `calc(100vh - ${topNavMargins[key] + minHeight}px) !important`;
    obj[key] = `calc(100vh - ${topNavMargins[key] + minHeight}px)`;
    //must be `!important` to override `Scrollbars` component default
    return obj;
  }, {});

  const attrSpecificBreakpoints = (breakpoints, attr) => {
    return Object.keys(breakpoints).reduce((obj, key) => {
      obj[key] = {};
      obj[key][attr] = breakpoints[key];
      return obj;
    }, {})
  }

  return {
    scrollArea: {
      marginBottom: bottomBarMargin,
      ...attrSpecificBreakpoints(topNavMargins, 'marginTop')
    },
    customScrollbars: {
      width: '100vw',
      ...attrSpecificBreakpoints(totalHeightsMinusNavs, 'minHeight')
    },
    notSoCustomScrollbars: attrSpecificBreakpoints(totalHeightsMinusNavs, 'minHeight'),
    cvViewer: {
      ...attrSpecificBreakpoints(topNavMargins, 'top'),
      ...attrSpecificBreakpoints(totalHeightsMinusNavs, 'height')
    }
  };
};
