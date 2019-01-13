import React from 'react';

import { withNamespaces } from 'react-i18next';

import ProjectCard from './ProjectCard';
import ProjectPanel from './ProjectPanel';
import ProjectFilter from './ProjectFilter';

import { Grid, Typography } from '@material-ui/core';

class WorkSection extends React.Component {

  state = {
    technologyFilters: [],
    projectIsOpen: false,
    lastProjectOpened: undefined // must be `undefined` not `null`
    // in order to fallback to default `{}` and avoid `TypeError`s
  }

  showPanel(project) {
    this.setState({
      projectIsOpen: true,
      lastProjectOpened: project
    });
  }

  handleFilterChange = e => {
    this.setState({ technologyFilters: e.target.value });
  };

  clearFilters = () => this.setState({ technologyFilters: [] });

  hidePanel() {
    this.setState({ projectIsOpen: false });
  }

  render() {
    const { t } = this.props;

    const projects = t('projects', { returnObjects: true });

    const uniqueTechnologies = Object.keys(projects).reduce((techs, projKey) => {

      const proj = projects[projKey];

      proj.technologies.forEach(tech => {
        if (!techs.includes(tech)) {
          techs.push(tech);
        }
      });

      return techs;

    }, []).sort();

    const { technologyFilters } = this.state;

    const filtersFullOrEmpty = (uniqueTechnologies.length === technologyFilters.length) || !technologyFilters.length;

    return (
      <section style={{width: '100%'}}>
        <ProjectPanel
          open={this.state.projectIsOpen}
          project={this.state.lastProjectOpened}
          hideSelf={() => this.hidePanel()}
        />
        <Typography variant='h1'>{t('ui.work')}</Typography>
        <ProjectFilter
          technologies={uniqueTechnologies}
          technologyFilters={technologyFilters}
          fullOrEmpty={filtersFullOrEmpty}
          clearFilters={this.clearFilters}
          handleChange={this.handleFilterChange}
        />
        <Grid
          container
          direction='row'
          justify='space-evenly'
          style={{padding: 0}}
        >
          {Object.keys(projects).reduce((projs, key) => {
            const project = projects[key];

            if (filtersFullOrEmpty || project.technologies.some(tech => technologyFilters.includes(tech))) {
              projs.push(
                <ProjectCard
                  key={key}
                  // id={key}
                  showPanel={() => this.showPanel(project)}
                  {...project}
                />
              );
            }
            return projs;
          }, [])}
        </Grid>
      </section>
    );
  }
}

export default withNamespaces('translations')(WorkSection)
