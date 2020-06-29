import React from 'react';
import {Container} from 'react-bootstrap';
import { Route, Switch } from "react-router-dom";
import NavSection from './NavSection'
import About from './About/About'
import PhotoGallery from './Photography/PhotoGallery'
import './App.css';
import Amplify from 'aws-amplify'
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

function App() {
  return (
      <Container fluid>
        <h1>James Kadunc</h1>
        <NavSection/>
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
  );
}

export default App;
