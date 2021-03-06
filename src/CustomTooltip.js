import React from 'react';

import { Tooltip } from '@material-ui/core';

const CustomTooltip = props => {

  const popperProps = {
    container: document.querySelector('#customScrollbars')
    // forces the tooltip placement to display correctly (resolves issue with
    // custom scrollbars affecting position ot tooltip).
    // note that this `querySelector` resolves to `null` on platforms where custom
    // scrollbars aren't used, hence has no effect
  };

  return (
    <Tooltip PopperProps={popperProps} {...props} />
  );

}

export default CustomTooltip;
