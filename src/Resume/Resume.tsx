import React, {useState} from 'react';
import { Grid, Container} from '@material-ui/core';
import ResumeHeading from './ResumeHeading';
import ResumeContent from '../siteContent';


export default function Resume () {

    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
      <Container maxWidth='lg'>
      <Grid container>
          <Grid item xs={3} >
            {ResumeContent.map((element, index) => 
              <ResumeHeading key={index} onClick={() => setSelectedIndex(index)} Title={element.Title} /> 
            )}
          </Grid>
          <Grid item xs={2}></Grid>
        <Grid item xs={7}>
            {ResumeContent[selectedIndex].Content}
          </Grid>
        </Grid>
        </Container>
    );
}


