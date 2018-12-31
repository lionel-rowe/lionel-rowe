import React from 'react';

import { Router } from '@reach/router';

import { Grid } from '@material-ui/core';

import ScrollArea from './ScrollArea';
import Spinner from './Spinner';

const IntroSection = React.lazy(() => import('./IntroSection'));
const WorkSection = React.lazy(() => import('./WorkSection'));
const SkillsSection = React.lazy(() => import('./SkillsSection'));
const ContactSection = React.lazy(() => import('./ContactSection'));

export default function() {
  return (
    <ScrollArea>
      <React.Suspense fallback={<Spinner />}>
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
      </React.Suspense>
    </ScrollArea>
  );
}
