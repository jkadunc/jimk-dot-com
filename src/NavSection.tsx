import React from 'react';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {Link as BrowserLink} from 'react-router-dom';


const getStyles = makeStyles((theme) => ({
    name: {
      textTransform: 'uppercase',
      verticalAlign: 'middle'
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
    }
}));


//TODO: implement link highlighting for currently loaded page

function NavSection() {

  const classes = getStyles();

  return (
    <div style={{ width: '100%', padding: '10px 10px 50px 10px' }}>
      <Box p={1} m={1} display="flex" flexWrap="wrap" justifyContent='space-between' alignItems='baseline'>
        <Box p={1} >
          <Link underline="none" component={BrowserLink} to='/'>
            <img className={classes.img} src='/img/line-angled.svg' alt='' height='35px'></img>
            <Typography className={classes.name} variant='h3' display='inline'>James Kadunc</Typography>
          </Link>
        </Box>
        <Box p={1}>
          <Link underline="none" component={BrowserLink} to='/'>
            <Typography className={classes.headerLink} variant='h4'>about</Typography>
          </Link>
          <Link underline="none" component={BrowserLink} to='/resume'>
            <Typography className={classes.headerLink} variant='h4' >resume</Typography>
          </Link>
          <Link underline="none" component={BrowserLink} to='/photography'>
            <Typography className={classes.headerLink} variant='h4'>photography</Typography>
          </Link>
          <Link underline="none" component={BrowserLink} to='/wedding'>
            <Typography className={`${classes.weddingHeaderLink} ${classes.headerLink}`} variant='h4'>wedding</Typography>
          </Link>
        </Box>
      </Box>
    </div>
  );
}

export default NavSection;
