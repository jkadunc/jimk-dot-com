import React from 'react';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import {Link as BrowserLink} from 'react-router-dom';


const NameText = styled(Typography)`
  text-transform: uppercase;
  vertical-align: middle;
`;

const HeaderLinkText = styled(Typography)`
  vertical-align: middle;
  &:hover {
    border-bottom: 2px #F9B84A solid;
  }
  padding: 0px 10px;
  @media (min-width:850px) {
    display: inline;
  }
`;

const Image = styled.img`
  vertical-align: middle;
`;


function NavSection() {
  return (
    <div style={{ width: '100%', padding: '10px' }}>
      <Box p={1} m={1} display="flex" flexWrap="wrap" justifyContent='space-between' alignItems='baseline'>
        <Box p={1} >
          <Link underline="none" component={BrowserLink} to='/'>
            <Image src='/img/line-angled.svg' alt='' height='35px'></Image>
            <NameText variant='h3' display='inline'>James Kadunc</NameText>
          </Link>
        </Box>
        <Box p={1}>
          <Link underline="none" component={BrowserLink} to='/'>
            <HeaderLinkText variant='h4'>about</HeaderLinkText>
          </Link>
          <Link underline="none" component={BrowserLink} to='/resume'>
            <HeaderLinkText variant='h4' >resume</HeaderLinkText>
          </Link>
          <Link underline="none" component={BrowserLink} to='/photography'>
            <HeaderLinkText variant='h4'>photography</HeaderLinkText>
          </Link>
          <Link underline="none" component={BrowserLink} to='/wedding'>
            <HeaderLinkText variant='h4'>wedding</HeaderLinkText>
          </Link>
        </Box>
      </Box>
    </div>
  );
}

export default NavSection;
