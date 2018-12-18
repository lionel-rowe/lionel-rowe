import React from 'react';

import { Router } from '@reach/router';

import { Grid } from '@material-ui/core';
import IntroSection from './IntroSection.js';
import WorkSection from './WorkSection.js';
import SkillsSection from './SkillsSection.js';
import ContactSection from './ContactSection.js';

import { Scrollbars } from 'react-custom-scrollbars';

export default function() {

  const topNavMargin = 64; //TODO: add breakpoint - increases/decreases based on screen width
  const bottomBarMargin = 56;
  const totalNavHeight = topNavMargin + bottomBarMargin;

  return (
    <Scrollbars style={{
      width: '100vw',
      marginTop: topNavMargin,
      marginBottom: bottomBarMargin,
      height: `calc(100vh - ${totalNavHeight}px)`
    }}>
      <Grid
        container
        direction='row'
        justify='center'
        alignItems='center'
        style={{padding: '0 20px'}}
        component='main'
      >
        <Grid item xs={12} sm={10} md={10} lg={8} xl={6} component={Router}>
          <IntroSection path='/' />
          <WorkSection path='/work' />
          <SkillsSection path='/skills' />
          <ContactSection path='/contact' />
        </Grid>
      </Grid>
    </Scrollbars>
  );
}
