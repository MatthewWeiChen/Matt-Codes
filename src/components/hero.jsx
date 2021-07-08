import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import Video from '../video/coding.mp4';
import '../styles/header.css';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from '@material-ui/core';

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
    backgroundColor: 'rgba(0, 0, 0, 0.7)'
  },
  title: {
    paddingBottom: theme.spacing(1),
    fontWeight: '600',
    fontSize: '5rem'
  },
  slideUp: {
    animation: 'slideUp 0.9s cubic-bezier(0.65, 0, 0.35, 1) both'
  },
  '@keyframes slideUp': {
    '0%': {
      transform: 'translateY(100px)'
    },
    '100%': {
      transform: 'translateY(0)'
    }
  }
}));

const Hero = () => {
  const classes = useStyles();
  const [hover, setHover] = useState(false);
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
          <Typography
            variant="h3"
            component="h1"
            className={classes.title}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
          >
            {hover ? (
              <Link href="about" underline="none" color="primary">
                About
              </Link>
            ) : (
              <span className={classes.slideUp}>
                Hello there!<span className="wave">👋</span>
              </span>
            )}
          </Typography>
          <Typography
            variant="h3"
            component="h1"
            className={classes.title}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
          >
            {hover ? (
              <Link href="projects" underline="none" color="primary">
                Projects
              </Link>
            ) : (
              <span>I'm Matt.</span>
            )}
          </Typography>
          {/* <Button color="primary" variant="contained">
            Click Me
          </Button> */}
        </Box>
      </div>
    </header>
  );
};

export default Hero;
