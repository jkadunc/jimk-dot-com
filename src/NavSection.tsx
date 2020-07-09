import React from 'react';

import { Typography, Box, Container, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {Link as BrowserLink} from 'react-router-dom';


const getStyles = makeStyles((theme) => ({
    name: {
      textTransform: 'uppercase',
      verticalAlign: 'middle',
      paddingLeft: '10px'
    },
    headerLink: {
      verticalAlign: 'middle',
      '&:hover' : {
        borderBottom: '2px #F9B84A solid'
      },
      padding: '0px 5px',
      margin: '0px 10px',
      '@media (min-width:850px)': {
        display: 'inline'
      }
    },
    weddingHeaderLink: {
      color: '#BDE3F6',
      '&:hover' : {
        borderBottom: 'none'
      }
    },
    img: {
      verticalAlign: 'middle'
    }, 
    container: {
      paddingBottom: '75px'
    }
}));

function NavSection() {

  const classes = getStyles();

  return (
    <Container className={classes.container} maxWidth='xl'>
      <Box p={1} m={1} display="flex" flexWrap="wrap" justifyContent='space-between' alignItems='baseline'>
        <Box p={1} >
          <Link underline="none" component={BrowserLink} to='/'>
            <img className={classes.img} src='/img/line-angled.svg' alt='' height='45px'></img>
            <Typography className={classes.name} variant='h2' display='inline'>James Kadunc</Typography>
          </Link>
        </Box>
        <Box p={1}>
          <Link underline="none" component={BrowserLink} to='/'>
            <Typography className={classes.headerLink} variant='h3'>about</Typography>
          </Link>
          <Link underline="none" component={BrowserLink} to='/resume'>
            <Typography className={classes.headerLink} variant='h3' >resume</Typography>
          </Link>
          <Link underline="none" component={BrowserLink} to='/photography'>
            <Typography className={classes.headerLink} variant='h3'>photography</Typography>
          </Link>
          <Link underline="none" component={BrowserLink} to='/wedding'>
            <Typography className={`${classes.weddingHeaderLink} ${classes.headerLink}`} variant='h3'>wedding</Typography>
          </Link>
        </Box>
      </Box>
    </Container>
  );
}

export default NavSection;
