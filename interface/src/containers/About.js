import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SectionContent from '../components/SectionContent';

import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

class About extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { classes } = this.props;
    return (
      <SectionContent title="">
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h6" component="h1">
              Author:
            </Typography>
            <Typography className={classes.pos} variant="h7" color="textSecondary">
              Bruno Leitão de Oliveira
            </Typography>
            <Typography className={classes.pos} variant="h7" color="textSecondary">
              uncodead@gmail.com
            </Typography>
            <Typography variant="h6" component="h1">
              Thanks:
            </Typography>
            <Typography className={classes.pos} variant="h8" color="textSecondary">
              Luciano Rampanelli
            </Typography>
            <Typography className={classes.pos} variant="h8" color="textSecondary">
              Eduardo 'Dumpa' Sanches
            </Typography>
            <Typography className={classes.pos} variant="h8" color="textSecondary">
              Guilherme Wood
            </Typography>
            <Typography className={classes.pos} variant="h8" color="textSecondary">
              Paiakan
            </Typography>
            <Typography className={classes.pos} variant="h8" color="textSecondary">
              rjwats/esp8266-react
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" color="secondary" className={classes.button} size="small" target="_blank" href="https://github.com/uncodead/BrewUNO">Github</Button>
          </CardActions>
        </Card>
      </SectionContent >
    )
  }
}

export default withStyles(styles)(About);