import React from 'react';
import { withStyles, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const aspectRatio = [1200, 700];
const scale = 0.33;
const [width, height] = aspectRatio.map(el => el * scale);

const styles = {
  card: {
    // width: '100%',
    // maxWidth: width,
    flex: `0 1 ${width}px`,
    margin: '0 20px 50px 20px'
  },
  media: {
    backgroundPosition: '0 0',
    height: height
  }
};

//TODO: add drawer (on parent)

const fallbackImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gwUDQwBXrnRKQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAADElEQVQI12Po6OgAAAM0AZkQj9/uAAAAAElFTkSuQmCC'; //plain gray bg

function ProjectCard(props) {

  const { classes } = props;
  const { projectId, //TODO
    img, name, url, github, shortDesc, fullDesc, technologies } = props;

  const showPanel = () => {}; //TODO

  return (
    <Card className={classes.card}>
      <CardActionArea
        onClick={() => showPanel()}
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
      <CardActions style={{
        // justifyContent: 'center'
      }}>

        {
          url ? (
            <Button target='_blank' href={url}>
              <FontAwesomeIcon icon={['fas', 'link']} />
            </Button>
          ) : null
        }

        {
          github ? (
            <Button target='_blank' href={github}>
              <FontAwesomeIcon icon={['fab', 'github']} />
            </Button>
          ) : null
        }





      </CardActions>
    </Card>
  );
}

export default withStyles(styles)(ProjectCard);
