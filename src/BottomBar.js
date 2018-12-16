import React from 'react';

import { Link, withRouter } from "react-router-dom";

import { withStyles, BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { ArtTrack, AddCircle, PermContactCalendar, Home } from '@material-ui/icons';

import { withNamespaces } from "react-i18next";

// import { Route } from "react-router-dom";

// import { Grid } from '@material-ui/core';
// import IntroSection from './IntroSection.js';
// import TimelineSection from './TimelineSection.js';
// import SkillsSection from './SkillsSection.js';
// import ContactSection from './ContactSection.js';

const styles = {
  root: {
    width: '100%',
    position: "fixed",
    bottom:"0",
  },
  actionButton: {
    minWidth: 50
  }
};

class BottomBar extends React.Component {

  state = {
    value: this.props.location.pathname,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { t, classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        component='nav'
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction className={classes.actionButton} value='/' component={Link} to="/" label={t('ui.home')} icon={<Home />} />
        <BottomNavigationAction className={classes.actionButton} value='/work' component={Link} to="/work" label={t('ui.work')} icon={<ArtTrack />} />
        <BottomNavigationAction className={classes.actionButton} value='/skills' component={Link} to="/skills" label={t('ui.skills')} icon={<AddCircle />} />
        <BottomNavigationAction className={classes.actionButton} value='/contact' component={Link} to="/contact" label={t('ui.contact')} icon={<PermContactCalendar />} />
      </BottomNavigation>

    );
  }
}

export default withNamespaces('translations')(withRouter(withStyles(styles)(BottomBar)));
