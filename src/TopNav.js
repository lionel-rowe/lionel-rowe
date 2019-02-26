import React, { useState } from 'react';

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

const TopNav = ({ t, i18n, classes }) => {

  const [ anchorEl, setAnchorEl ] = useState(null);

  const handleMenuOpen = e => {
    setAnchorEl(e.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
    handleMenuClose();
  };

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
            onClick={handleMenuOpen}
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
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={() => changeLanguage('en-US')}>English</MenuItem>
            <MenuItem onClick={() => changeLanguage('zh-CN')}>中文</MenuItem>
          </Menu>
        </div>

      </Toolbar>
    </AppBar>
  );
}

export default withNamespaces('translations')(withStyles(styles)(TopNav));
