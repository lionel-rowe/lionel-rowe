import React from 'react';

import { Link } from '@reach/router';
import { withNamespaces } from 'react-i18next';

import { withStyles, AppBar, Toolbar, Typography, IconButton, MenuItem, Menu } from '@material-ui/core';
import { Translate } from '@material-ui/icons';

const styles = theme => ({
  gradientBar: {
    background: `linear-gradient(to right, ${theme.palette.primary.gradient})`
  },
  fullWidthTextLeft: {
    display: 'flex',
    flexGrow: 1,
    textAlign: 'left'
  },
  unstyledLink: {
    color: 'inherit',
    textDecoration: 'none'
  }
});

class TopNav extends React.Component {

  state = {
    anchorEl: null
  };

  handleMenuOpen = (e) => {
    this.setState({ anchorEl: e.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
  };

  changeLanguage = (lng) => {
    this.props.i18n.changeLanguage(lng);
    this.handleMenuClose();
  };

  render() {

    const { t, classes } = this.props;
    const { anchorEl } = this.state;

    return (
      <AppBar component='nav' position='fixed' className={classes.gradientBar}>
        <Toolbar>
          <div className={classes.fullWidthTextLeft}>
            <Link to='/' className={classes.unstyledLink}>
              <Typography variant='h6' color='inherit'>
                {t('fullName')}
              </Typography>
            </Link>
          </div>

          <div>
            <IconButton
              aria-owns={ anchorEl ? 'menu-appbar' : undefined }
              aria-haspopup='true'
              onClick={this.handleMenuOpen}
              color='inherit'
            >
              <Translate />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={!!anchorEl}
              onClose={this.handleMenuClose}
            >
              <MenuItem onClick={() => this.changeLanguage('en-US')}>English</MenuItem>
              <MenuItem onClick={() => this.changeLanguage('zh-CN')}>中文</MenuItem>
            </Menu>
          </div>

        </Toolbar>
      </AppBar>
    );
  }
}

export default withNamespaces('translations')(withStyles(styles)(TopNav));
