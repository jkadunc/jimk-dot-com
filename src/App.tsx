import React from 'react';
import { Route, Switch } from "react-router-dom";
import NavSection from './NavSection';
import About from './About/About';
import PhotoGallery from './Photography/PhotoGallery';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import WeddingLanding from './Wedding/WeddingLanding';
import Resume from './Resume/Resume';
import {ThemeProvider} from '@material-ui/styles';
import {createMuiTheme} from '@material-ui/core/styles';
import {CssBaseline} from '@material-ui/core';

Amplify.configure(awsconfig);

const theme = createMuiTheme({
  palette:{
    primary: {
      main: '#fff'
    },
    secondary: {
      main: '#F9B84A'
    },
    background: {
      default: '#000'
    },
    text:{
      primary: '#fff',
      secondary: '#F9B84A'
    }
  },
  typography:{
    fontFamily:  'montserrat, sans-serif',
    h3: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      '@media (min-width:850px)': {
        fontSize: '1.8rem',
      }
    },
    h4: {
      fontSize: '1.1rem',
      '@media (min-width:850px)': {
        fontSize: '1.5rem',
      }
    }
  },
});

function App() {
  return (
  <ThemeProvider theme={theme}>
      <CssBaseline /> 
        <NavSection/>
          <Switch>
            <Route path='/photography'>
              <PhotoGallery PhotosPerRow={3} />
            </Route>
            <Route path='/wedding'>
              <WeddingLanding/>
            </Route>
            <Route path='/resume'>
              <Resume/>
            </Route>
            <Route exact path='/'>
              <About/>
            </Route>
          </Switch>
      </ThemeProvider>
  );
}

export default App;
