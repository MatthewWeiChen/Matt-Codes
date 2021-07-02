import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  aboutImg: {
    width: '50%'
  }
}));

const About = () => {
  const classes = useStyles();
  return (
    <Box height="100%">
      <Typography variant="h2" component="h1">
        About me
      </Typography>
    </Box>
  );
};

export default About;
