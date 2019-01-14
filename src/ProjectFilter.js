import React from 'react';

import { withNamespaces } from 'react-i18next';

import { withStyles, FormControl, InputLabel, Select, MenuItem, Checkbox, ListItemText, Input, IconButton } from '@material-ui/core';

import { Close } from '@material-ui/icons/';

// import { Scrollbars } from 'react-custom-scrollbars';

// import detectMobileBrowser from './detectMobileBrowser';

// const isMobile = detectMobileBrowser();

// const ScrollArea = props => {
//   const { className, ...classlessProps } = props;

//   return !isMobile ? <Scrollbars {...props} /> : <React.Fragment {...classlessProps} />
// };

const FILTER_BUTTON_WIDTH = 48;

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const FILTER_SELECTOR_HEIGHT = ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP;
const FILTER_SELECTOR_WIDTH = 300;


const styles = theme => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: FILTER_SELECTOR_WIDTH,
    margin: '0 auto'
  },

  // scrollbars: {
  //   minHeight: FILTER_SELECTOR_HEIGHT - 20,
  //   minWidth: FILTER_SELECTOR_WIDTH
  // },

  formControl: {
    margin: theme.spacing.unit,
    flex: '0 1 100%',
    textAlign: 'left'
  },

  clearFilterButton: {
    width: FILTER_BUTTON_WIDTH
  }
});

const ProjectFilter = props => {
  const { t, classes, technologyFilters, technologies, fullOrEmpty } = props;

  const joinify = listItems => listItems.join(t('global.listItemDelimiter'));

  const values = fullOrEmpty ? [] : technologyFilters;

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: FILTER_SELECTOR_HEIGHT,
        width: 250,
        marginTop: ITEM_HEIGHT /*
          * (1 + (fullOrEmpty ? 0 : technologies.length))
        */
      },
    },
  };

  return (
    <div className={classes.container}>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="select-multiple-checkbox">{t('ui.filterByTech')}</InputLabel>
        <Select
          multiple
          value={values}
          onChange={props.handleChange}
          input={<Input id="select-multiple-checkbox" />}
          renderValue={joinify}
          MenuProps={MenuProps}
          title={joinify(values)}
        >
{/*          <ScrollArea className={classes.scrollbars}>*/}
            {technologies.map(tech => (
              <MenuItem key={tech} value={tech}>
                <Checkbox checked={technologyFilters.indexOf(tech) > -1 && !fullOrEmpty} />
                <ListItemText primary={tech} />
              </MenuItem>
              // indeterminate
            ))}
{/*          </ScrollArea>*/}
        </Select>
      </FormControl>
      {fullOrEmpty ? null :
        <IconButton
          className={classes.clearFilterButton}
          aria-label={t('ui.clearFilters')}
          onClick={props.clearFilters}
        >
          <Close />
        </IconButton>
      }
    </div>

  );
}

export default withNamespaces('translations')(withStyles(styles)(ProjectFilter));
