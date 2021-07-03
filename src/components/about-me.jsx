import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Container, Grid, Spacing } from '@material-ui/core/';
import { createMuiTheme } from '@material-ui/core/';
import Me from '../images/Me.jpg';
import Image from 'material-ui-image';

const useStyles = makeStyles(theme => ({
  title: {
    fontWeight: '600',
    fontSize: '5rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '3rem'
    }
  },
  imageControl: {
    marginTop: theme.spacing(8)
  },
  aboutTitle: {
    fontWeight: '600',
    fontSize: '3rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '30px'
    },
    marginTop: theme.spacing(8)
  },
  aboutParagraph: {
    fontSize: '2rem',
    fontWeight: '400',
    marginTop: theme.spacing(8),
    [theme.breakpoints.down('xs')]: {
      fontSize: '20px'
    }
  }
}));

const About = () => {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        direction="column"
        justifycontent="center"
        alignItems="center"
      >
        <Box m={8}>
          <Typography
            variant="h2"
            component="h1"
            color="secondary"
            className={classes.title}
          >
            I engineer
            <div>your ideas</div>
          </Typography>
          <Image
            alt="Matt Chen"
            src={Me}
            cover="true"
            color="#222222"
            className={classes.imageControl}
          />
        </Box>
        <Box>
          <Typography className={classes.aboutTitle} color="secondary">
            About
          </Typography>
          <Typography
            component="p"
            className={classes.aboutParagraph}
            color="secondary"
          >
            I am a software engineer
          </Typography>
        </Box>
      </Grid>
    </>
  );
};

export default About;
