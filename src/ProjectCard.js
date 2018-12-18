import React from 'react';
import { withStyles, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const aspectRatio = [1200, 700];
const scale = 0.33;
const [width, height] = aspectRatio.map(el => el * scale);

const styles = {
  card: { width },
  media: { height }
};

//TODO: add drawer (on parent)

function ProjectCard(props) {

  const { classes, img, name, url, github, shortDesc, fullDesc, technologies } = props;

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={img}
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

        <Button target='_blank' href={url}>
          <FontAwesomeIcon icon={['fas', 'link']} />
        </Button>

        <Button target='_blank' href={github}>
          <FontAwesomeIcon icon={['fab', 'github']} />
        </Button>


      </CardActions>
    </Card>
  );
}

export default withStyles(styles)(ProjectCard);
