import React from 'react';
import { Document, Page, Text, View } from '@react-pdf/renderer';

import theme from './muiTheme'; // must be imported directly due to bug with `withTheme` (uses default theme, not custom theme)

const Cv = props => {

  // const { theme } = props;

  const styles = {
    page: {
      flexDirection: 'row',
      backgroundColor: theme.palette.primary.main
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    }
  };

  console.log(theme);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Section #1</Text>
        </View>
        <View style={styles.section}>
          <Text>Section #2</Text>
        </View>
      </Page>
    </Document>
  );
};

// export default withTheme(/*theme*/)(Cv);
export default Cv;
