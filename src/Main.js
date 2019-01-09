import React from 'react';

import { Router } from '@reach/router';

import ScrollArea from './ScrollArea';
import GridContainer from './GridContainer';
import SectionSpinner from './SectionSpinner';

const IntroSection = React.lazy(() => import('./IntroSection'));
const WorkSection = React.lazy(() => import('./WorkSection'));
const SkillsSection = React.lazy(() => import('./SkillsSection'));
const ContactSection = React.lazy(() => import('./ContactSection'));

export default function() {
  return (
    <ScrollArea>
      <React.Suspense fallback={<SectionSpinner />}>
        <GridContainer component={Router}>
          <IntroSection path='/' />
          <WorkSection path='/work' />
          <SkillsSection path='/skills' />
          <ContactSection path='/contact' />
        </GridContainer>
      </React.Suspense>
    </ScrollArea>
  );
}
