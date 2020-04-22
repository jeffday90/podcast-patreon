/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {
  Card, CardContent, makeStyles, Typography, Grid,
} from '@material-ui/core';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles({
  root: {
    midWidth: 500,
    maxWidth: 800,
  },
  title: {
    fontColor: blue,
  },
  pos: {
    marginBottom: 12,
  },
});

const PodcastEntry = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      style={{ minHeight: '100vh' }}
    >
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} variant="h5">
            Title: 'something dynamic'
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};


export default PodcastEntry;
