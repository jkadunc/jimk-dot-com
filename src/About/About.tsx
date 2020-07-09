import React from 'react';
import {  Container, Grid, Hidden, Typography} from '@material-ui/core';
import siteContent from '../siteContent'



const content = siteContent.about.content;

function About() {
  return (
   <Container maxWidth='lg'>
     <Grid container>
      <Hidden smDown>
        <Grid item xs={12} md={6}>
          <Typography variant='h5'>
            PLACEHOLDER TEXT
          </Typography>
        </Grid>
      </Hidden>
      <Grid item xs={12} md={6}>
        <Typography variant='body1'>
          {siteContent.about[0].}
        </Typography>
        </Grid>
      </Grid>
   </Container>
  );
}

export default About;
