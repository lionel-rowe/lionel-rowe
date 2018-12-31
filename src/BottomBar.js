import React from 'react';

import { Link, Location } from '@reach/router';

import { withStyles, BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { ArtTrack, AddCircle, PermContactCalendar, Home } from '@material-ui/icons';

import { withNamespaces } from 'react-i18next';

const styles = theme => ({
  root: {
    zIndex: 1000,
    width: '100%',
    position: 'fixed',
    bottom: 0
  },
  actionButton: {
    minWidth: 50,
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
            <BottomNavigationAction value='/work' to='/work' label={t('ui.work')} icon={<ArtTrack />} {...commonActionButtonProps} />
            <BottomNavigationAction value='/skills' to='/skills' label={t('ui.skills')} icon={<AddCircle />} {...commonActionButtonProps} />
            <BottomNavigationAction value='/contact' to='/contact' label={t('ui.contact')} icon={<PermContactCalendar />} {...commonActionButtonProps} />
          </BottomNavigation>
        );

      }}
    </Location>
  );
}

export default withNamespaces('translations')(withStyles(styles)(BottomBar));
