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
const filterSelectorHeight = ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP;
const filterSelectorWidth = 300;


const styles = theme => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  // scrollbars: {
  //   minHeight: filterSelectorHeight - 20,
  //   minWidth: filterSelectorWidth
  // },

  formControl: {
    margin: theme.spacing.unit,
    width: filterSelectorWidth,
    textAlign: 'left'
  },

  clearFilterButton: {
    width: FILTER_BUTTON_WIDTH
  }
});

const ProjectFilter = props => {
  const { t, classes, technologyFilters, technologies, fullOrEmpty } = props;

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: filterSelectorHeight,
        width: 250,
        marginTop: ITEM_HEIGHT
      },
    },
  };

  return (
    <div className={classes.container}>
      <FormControl className={classes.formControl} style={{
        marginLeft: fullOrEmpty ? 0 : FILTER_BUTTON_WIDTH
      }}>
        <InputLabel htmlFor="select-multiple-checkbox">{t('ui.filterByTech')}</InputLabel>
        <Select
          multiple
          value={fullOrEmpty ? [] : technologyFilters}
          onChange={props.handleChange}
          input={<Input id="select-multiple-checkbox" />}
          renderValue={selected => selected.join(', ')}
          MenuProps={MenuProps}
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
