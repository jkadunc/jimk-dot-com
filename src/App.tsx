import React from 'react';
import {Container} from 'react-bootstrap';
import { Route, Switch } from "react-router-dom";
import NavSection from './NavSection'
import About from './About/About'
import PhotoGallery from './Photography/PhotoGallery'
import styled from 'styled-components';
import Amplify from 'aws-amplify'
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);


const Header = styled.h1`
  padding: 10px;
  text-align: center;
`;

function App() {
  return (
      <Container fluid>
        <Header>James Kadunc</Header>
        <NavSection/>
        <Container>
          <Switch>
            <Route path='/about'>
              <About/>
            </Route>
            <Route path='/photography'>
              <PhotoGallery PhotosPerRow={3} />
            </Route>
            <Route exact path='/'>
              <h2>Home</h2>
            </Route>
          </Switch>
        </Container>
    </Container>
  );
}

export default App;
