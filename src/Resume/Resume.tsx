import React from 'react';
import { Grid, Container, Typography} from '@material-ui/core';

const aboutText = [
  `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`,
  `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`
];


export default function Resume() {
  return (
    <Container maxWidth='lg'>
     <Grid container>
        <Grid item xs={3} >
            <Grid item xs={12}>
            <Typography variant='h5'>
                OVERVIEW
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='h5'>
                EDUCATION
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='h5'>
                EXPERIENCE
            </Typography>
          </Grid>
        </Grid>
        <Grid xs={3}></Grid>
      <Grid item xs={6}>
        <Typography variant='body1'>
          {aboutText[0]}
        </Typography>
        </Grid>
      </Grid>
      </Container>
  );
}


