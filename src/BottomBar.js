import React from 'react';

import { Link, Location } from '@reach/router';

import { withStyles, BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { DeveloperBoard, Home, QuestionAnswer/*, Gesture*/ } from '@material-ui/icons';

import { withNamespaces } from 'react-i18next';

const styles = theme => ({
  root: {
    zIndex: 1000,
    width: '100vw',
    position: 'fixed',
    bottom: 0
  },
  actionButton: {
    minWidth: 50,
    maxWidth: 250,
    '&$selected': {
      color: theme.palette.secondary.main
    }
  },
  selected: {}
});

const BottomBar = props => {

  const { t, classes } = props;

  const commonActionButtonProps = {
    color: 'secondary',
    component: Link,
    // className: classes.actionButton,
    classes: {
      root: classes.actionButton,
      selected: classes.selected
    }
  }

  return (
    <Location>
      {({ location }) => {
        return (
          <BottomNavigation
            component='nav'
            value={location.pathname}
            showLabels
            className={classes.root}
          >
            <BottomNavigationAction value='/'  to='/' label={t('ui.home')} icon={<Home />} {...commonActionButtonProps} />
            <BottomNavigationAction value='/portfolio' to='/portfolio' label={t('ui.work')} icon={<DeveloperBoard />} {...commonActionButtonProps} />
            {/*<BottomNavigationAction value='/skills' to='/skills' label={t('ui.skills')} icon={<Gesture />} {...commonActionButtonProps} />*/}
            {/*<BottomNavigationAction value='/cv' to='/cv' label={t('ui.cv')} icon={<PermContactCalendar />} {...commonActionButtonProps} />*/}
            <BottomNavigationAction value='/contact' to='/contact' label={t('ui.contact')} icon={<QuestionAnswer />} {...commonActionButtonProps} />
          </BottomNavigation>
        );

      }}
    </Location>
  );
}

export default withNamespaces('translations')(withStyles(styles)(BottomBar));
