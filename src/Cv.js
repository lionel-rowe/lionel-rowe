import React from 'react';

import { withNamespaces } from 'react-i18next';

import { Document, Page, Text, View } from '@react-pdf/renderer';

import theme from './muiTheme'; // must be imported directly due to bug with `withTheme` (uses default theme, not custom theme)

console.log(theme);

const Cv = props => {

  const { t } = props;

  // const u = text => {
  //   return t(text).replace(/[^ -~]/gu, m => '&#931;' /*`&#x${m.codePointAt().toString(16).toUpperCase()};`*/);
  // }

  console.log(theme);

  const styles = {
    page: {
      flexDirection: 'column',
      // backgroundColor: theme.palette.primary.main
      // fontFamily: 'sans-serif'
    },

    header: {
      padding: 10,
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText
    },

    section: {
      // margin: 10,
      padding: 10,
      // flexGrow: 1
    }
  };

  return (
    <Document>
      <Page size='A4' style={styles.page}>
        <View style={styles.header}>
          <Text>{t('fullName')}</Text>
        </View>
        <View style={styles.section}>
          <Text>&#931;</Text>
        </View>
      </Page>
    </Document>
  );
};

// export default withTheme()(Cv);
// export default withNamespaces('translations')(Cv);
// export default Cv;
export default withNamespaces('translations')(Cv);
