import React from 'react';
import ReactPlayer from 'react-player';
import Video from '../video/coding.mp4';
import '../styles/header.css';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100vh',
    position: 'relative',
    '& video': {
      objectFit: 'cover'
    }
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  title: {
    paddingBottom: theme.spacing(1)
  }
}));

const Hero = () => {
  const classes = useStyles();
  return (
    <header className={classes.root}>
      <ReactPlayer url={Video} playing loop muted width="100%" height="100%" />
      <div className={classes.overlay}>
        <Box
          height="100%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          color="#fff"
        >
          <Typography variant="h3" component="h1" className={classes.title}>
            Nice to meet you!
          </Typography>
          <Typography variant="h3" component="h1" className={classes.title}>
            I'm Matt.
          </Typography>
          <Button color="primary" variant="contained">
            Click Me
          </Button>
        </Box>
      </div>
    </header>
  );
};

export default Hero;
