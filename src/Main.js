import React from 'react';

import { Router, Redirect } from '@reach/router';

import ScrollArea from './ScrollArea';
import GridContainer from './GridContainer';
import SectionSpinner from './SectionSpinner';

const IntroSection = React.lazy(() => import('./IntroSection'));
const WorkSection = React.lazy(() => import('./WorkSection'));
// const SkillsSection = React.lazy(() => import('./SkillsSection'));
const ContactSection = React.lazy(() => import('./ContactSection'));
const StandaloneSpinner = React.lazy(() => import('./StandaloneSpinner'));
const NotFound = React.lazy(() => import('./NotFound'));

// const CvViewer = React.lazy(() => import('./CvViewer'));

export default function() {
  return (
    <ScrollArea>
      <React.Suspense fallback={<SectionSpinner />}>
        <GridContainer component={Router}>
          <IntroSection path='/' />
          <WorkSection path='/portfolio' />
          <Redirect
            noThrow /*https://github.com/reach/router/issues/100#issuecomment-415424987*/
            from='/work'
            to='/portfolio'
          />
          {/*<SkillsSection path='/skills' />*/}
          <ContactSection path='/contact' />
          {/*<CvViewer path='/cv' />*/}
          <StandaloneSpinner path='/spinner' />
          <NotFound default />
        </GridContainer>
      </React.Suspense>
    </ScrollArea>
  );
}
