import React from 'react';

import { Router } from '@reach/router';

import { Grid } from '@material-ui/core';

import ScrollArea from './ScrollArea.js';
import IntroSection from './IntroSection.js';
import WorkSection from './WorkSection.js';
import SkillsSection from './SkillsSection.js';
import ContactSection from './ContactSection.js';

export default function() {
  return (
    <ScrollArea>
      <Grid
        container
        direction='row'
        justify='center'
        alignItems='center'
        style={{padding: '0 20px'}}
        component={props => <Router {...props} component='main' />}
      >
        <IntroSection path='/' />
        <WorkSection path='/work' />
        <SkillsSection path='/skills' />
        <ContactSection path='/contact' />
      </Grid>
    </ScrollArea>
  );
}
