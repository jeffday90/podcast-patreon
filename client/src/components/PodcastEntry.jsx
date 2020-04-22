/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prefer-stateless-function */
import '@babel/polyfill';
import React from 'react';
import {
  Button, Card, CardContent, makeStyles, Typography, Grid,
} from '@material-ui/core';
import { Howl } from 'howler';
import Parser from 'rss-parser';

const useStyles = makeStyles({
  root: {
    midWidth: 500,
    maxWidth: 800,
  },
  pos: {
    marginBottom: 12,
  },
});

const url = [];
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
const parser = new Parser();


const play = () => {
  const sound = new Howl({
    src: [CORS_PROXY + url[0]],
    autoplay: true,
    // there is an issue with html5 and cors that doesn't let it play without fully loading
    // html5: true,
    onload() {
      // do something to the UI when this fires, to signify that it's done
      console.log('done loading');
    },
  });
  //   Sounds.play();
  console.log('sound');
};


(async () => {
  parser.parseURL(`${CORS_PROXY}https://www.patreon.com/rss/chapotraphouse?auth=e0I3MNk1lNjZaPpZdXiRgSzDc0cZoIU8`, (err, feed) => {
    if (err) throw err;
    feed.items.forEach((entry) => {
    //   console.log(entry.title);
      url.push(entry.enclosure.url);
    });
  });
})();


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
          <Typography color="primary" className={classes.title} variant="h5">
            Title: 'something dynamic'
          </Typography>
          <Button onClick={play}>
            Play item
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};


export default PodcastEntry;
