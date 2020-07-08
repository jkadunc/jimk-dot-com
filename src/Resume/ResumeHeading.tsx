import React from 'react';
import { Typography, Link} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const getStyles = makeStyles((theme) => ({
  link: { 
    '&:hover' : {
      cursor:'pointer'
     },
  }, 
  text: {
    padding: '10px 0px',
    margin: '50px 0px',
    textTransform: 'uppercase',
    '&:hover' : {
      borderLeft: '2px #F9B84A solid',
      paddingLeft: '10px'
    },
  }
}));

export default function ResumeHeading(props:any) {

  const classes = getStyles();

  return (
    <Link underline='none' className={classes.link} onClick={props.onClick}>
      <Typography className={classes.text} variant='h4'>
        {props.Title}
      </Typography>
    </Link>
  );
}


