import React from 'react';
import { withStyles, Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';

import getProjectImgDimensions from './getProjectImgDimensions';

const { width, height, largeScale, smallScale } = getProjectImgDimensions;

// const [width, height] = aspectRatio.map(el => el * scale);

const styles = theme => ({
  card: {
    flex: `0 1 ${width * largeScale}px`,
    margin: '0 20px 50px 20px',
    [theme.breakpoints.down('xs')]: {
      flex: `0 1 ${width * smallScale}px`,
      margin: '0 0 50px 0'
    }
  },
  media: {
    // backgroundPosition: '0 0', //top left
    backgroundPositionY: 0, //top
    height: `${height * largeScale}px`,
    [theme.breakpoints.down('xs')]: {
      height: `${height * smallScale}px`
    }
  }
});

//TODO: add drawer (on parent)

const fallbackImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gwUDQwBXrnRKQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAADElEQVQI12Po6OgAAAM0AZkQj9/uAAAAAElFTkSuQmCC'; //plain gray bg

function ProjectCard(props) {

  const { classes, showPanel } = props;
  const { img, name, shortDesc } = props;

  return (
    <Card className={classes.card}>
      <CardActionArea
        onClick={showPanel}
        // target='_blank' href={url}
      >
        <CardMedia
          className={classes.media}
          image={img || fallbackImg}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant='body2'>
            {shortDesc}
          </Typography>


{/*       {technologies.map((tech, idx) => <div key={idx}>{tech}</div>)}
*/}

        </CardContent>
      </CardActionArea>
{/*      <CardActions style={{
        // justifyContent: 'center'
      }}>



      </CardActions>*/}
    </Card>
  );
}

export default withStyles(styles)(ProjectCard);
