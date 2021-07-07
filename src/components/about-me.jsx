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
      fontSize: '3rem',
      position: 'left'
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
    fontSize: '16px',
    fontWeight: '400',
    marginTop: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      fontSize: '16px'
    }
  },
  aboutBox: {
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginLeft: '10px',
      padding: '5px'
    },
    width: '70%'
  },
  gridContainer: {
    justify: 'center',
    alightItems: 'center',
    [theme.breakpoints.down('xs')]: {
      alignItems: 'flex-start',
      justify: 'flex-start'
    }
  }
}));

const About = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container alignItems="center" direction="column">
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
            cover={true}
            color="#222222"
            className={classes.imageControl}
          />
        </Box>
        <Box ml={4} className={classes.aboutBox}>
          <Typography className={classes.aboutTitle} color="secondary">
            About
          </Typography>
          <Typography
            component="p"
            className={classes.aboutParagraph}
            color="secondary"
          >
            Hi, I'm Matt Chen and I am a software engineer. I have professional
            experience working with Vue.js, React.js, PHP, Node.js, MySQL and
            many more. I love to build creative designs with clean efficient
            code on the front and back end.
          </Typography>
          <Typography
            component="p"
            className={classes.aboutParagraph}
            color="secondary"
          >
            I have a diverse background of working in customer service,
            construction foreman, and non-profit volunteer. Although I didn't
            start my career path with programming I firmly believe that there is
            no straight path to the dream profession. From everything I have
            learned in the past I put that in my code as a living breathing
            entity.
          </Typography>
          <Typography
            component="p"
            className={classes.aboutParagraph}
            color="secondary"
          >
            However, I don't define myself just by my profession. I define
            myself by my passion, high propensity to learn quickly and desire to
            always better myself. Outside of coding, you can find me collecting
            Pokemon cards, watching anime or hiking. Love
          </Typography>
        </Box>
      </Grid>
    </>
  );
};

export default About;
