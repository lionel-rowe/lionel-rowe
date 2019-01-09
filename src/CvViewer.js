import React from 'react';
// import { PDFDownloadLink } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';

import { withStyles } from '@material-ui/core';

import Cv from './Cv';

import contentAreaBreakpoints from './contentAreaBreakpoints';

const styles = contentAreaBreakpoints;

const CvViewer = props => {

  const { classes } = props;

  return (
    <div>
      <PDFViewer
        className = {classes.cvViewer}
        style={{
          // width: '100vw',
          // height: 'calc(100vh - 128px)',
          // position: 'relative',
          // top: -2

          width: '100vw',
          position: 'fixed',
          left: 0,
          border: 'none'
        }}
      >
        <Cv />
      </PDFViewer>
    </div>
  );
};

export default withStyles(styles)(CvViewer);

// <PDFDownloadLink document={<Cv />} fileName="somename.pdf">
//   {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
// </PDFDownloadLink>
