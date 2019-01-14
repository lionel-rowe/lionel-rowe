import React from 'react';

import { withNamespaces } from 'react-i18next';

import { withStyles, Drawer, Typography,
  IconButton, Button } from '@material-ui/core';

import { Close } from '@material-ui/icons/';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SCROLLBAR_WIDTH = 10;

const colorTransition = { transition: 'all 0.15s' };
const absWidth = 700;
const relWidth = '100vw';
const ghLinkWidth = '2.5rem';

const styles = theme => {
  return {
    closeButton: {
      borderRadius: 0,
      height: '2em',
      width: '2em',
      position: 'fixed',
      background: 'rgba(0, 0, 0, 0.3)',
      color: 'rgba(255, 255, 255, 0.8)',
      ...colorTransition,
      '&:hover': {
        background: theme.palette.primary.main,
        color: theme.palette.secondary.main
      },
      zIndex: 2000,
      top: 0,
      right: SCROLLBAR_WIDTH,
      // transition: 'right 0.15s'
      animation: '0.15s flyFromRight'
    },

    '@keyframes flyFromRight': {
      from: {
        right: 0 - absWidth
      },
      to: {
        transform: SCROLLBAR_WIDTH
      }
    },

    projectDiv: {
      boxSizing: 'border-box',
      maxWidth: relWidth
    },

    imgContainer: {
      maxWidth: absWidth
    },

    projectImg: {
      width: '100%',
      height: 'auto'
    },

    paddedContent: {
      padding: '0 10px',
      maxWidth: absWidth,
      boxSizing: 'border-box'
    },

    bodyText: {
      textAlign: 'left'
    },

    heading: {
      position: 'relative',
      paddingLeft: ghLinkWidth
    },

    link: {
      color: 'inherit',
      textDecoration: 'inherit',
      ...colorTransition,
      '&:hover': {
        color: theme.palette.secondary.main
      }
    },

    techList: {
      paddingLeft: 0
    },

    listItem: {
      listStyleType: 'none',
      display: 'inline-block',
      '&:not(:last-child)::after': {
        content: '""',
        display: 'inline-block',
        width: '0.5em',
        height: '0.5em',
        background: theme.palette.secondary.main,
        verticalAlign: 'middle',
        margin: '0 0.5em',
        borderRadius: '50%'
      }
    },

    ghLink: {
      fontSize: '0.8em',
      float: 'right',
      minWidth: ghLinkWidth,
      padding: 0,
      ...colorTransition,
      '&:hover': {
        color: theme.palette.secondary.main,
        background: 'inherit'
      }
    }
  };
};

const openInNewTab = url => ({
  href: url,
  target: '_blank',
  rel: 'noopener noreferrer'
});

class ProjectPanel extends React.Component {

  componentDidUpdate() {
    //prevent double scrollbars

    document.querySelector('html').style.setProperty(
      'overflow-y',
      this.props.open ? 'hidden' : 'scroll',
      'important'
    );

    document.querySelector('html').style.setProperty(
      'padding-right',
      this.props.open ? `${SCROLLBAR_WIDTH}px` : '0px',
      'important'
    );

    document.querySelectorAll('nav')[0].style.setProperty( //top nav
      'padding-right',
      this.props.open ? `${SCROLLBAR_WIDTH}px` : '0px',
      'important'
    );

  }

  render() {

    const { t, classes, project = {}, hideSelf, open } = this.props;

    const { fullDesc, technologies = [], img, name, url, github } = project;

    return (

      <React.Fragment>
        {
          open && (
            <IconButton
              className={classes.closeButton}
              aria-label={t('ui.close')}
              onClick={hideSelf}
              style={{
                // display: open ? 'block' : 'none'
                // right: open ? SCROLLBAR_WIDTH : 0 - absWidth
              }}
            >
              <Close />
            </IconButton>
          )
        }

        <Drawer
          anchor='right'
          open={open}
          onClose={hideSelf}
        >
          <div className={classes.projectDiv}>
            <div className={classes.imgContainer}>
              <a {...openInNewTab(url)}>
                <img
                  src={img}
                  alt={`Screenshot of ${name} project`}
                  className={classes.projectImg}
                />
              </a>
            </div>
            <div className={classes.paddedContent}>
              <Typography variant='h2' className={classes.heading}>
                {
                  url ? (
                    <a
                      className={classes.link}
                      {...openInNewTab(url)}
                    >
                      {name}
                    </a>
                  ) : {name}
                }
                {' '}
                {
                  github ? (
                    <Button
                      className={classes.ghLink}
                      {...openInNewTab(github)}
                    >
                      <FontAwesomeIcon icon={['fas', 'code']} />
                    </Button>
                  ) : null
                }
              </Typography>
              <Typography variant='body1' component='ul' className={classes.techList}>
                {
                  technologies.map((technology, idx) => (
                      <li key={idx} className={classes.listItem}>{technology}</li>
                  ))
                }
              </Typography>
              <Typography variant='body2' component='div' className={classes.bodyText}>
                {fullDesc && fullDesc.split(/[\r\n]+/).map((para, idx) => (<p key={idx}>{para}</p>))}
              </Typography>
            </div>
          </div>
        </Drawer>
      </React.Fragment>

    );
  }
};

export default withNamespaces('translations')(withStyles(styles)(ProjectPanel));
