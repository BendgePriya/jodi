import React from 'react';
import { Button, TextField, Paper, Input,InputLabel, OutlinedInput } from '@material-ui/core';
import './AboutMe.css'
export default class AboutMe extends React.Component {
  render() {
    return (
      <div className='aboutMeContainer'>
      <h4>Critical Fields - Can be edited only once in lifetime</h4>
            <OutlinedInput
              autoFocus
              margin="dense"
              id="aboutMe"
              multiline
              />
            <InputLabel>
            Introduce yourself. Write about your values, beliefs/goals and aspirations.How do you describe yourself ? Your interests and hobbies.</InputLabel>
            <InputLabel>About My Family</InputLabel>
            <OutlinedInput
              margin="dense"
              id="aboutMyFamily"
              multiline
              />
            <InputLabel>About My Education</InputLabel>
            <OutlinedInput
              margin="dense"
              id="aboutMyEducation"
              multiline
              />
            <InputLabel>About My Career</InputLabel>
            <OutlinedInput
              margin="dense"
              id="aboutMyCareer"
              multiline
              />
            <div style={{backgroundColor:'transparent', marginTop:'1%', marginBottom:'1%'}}>
              <Button style={{backgroundColor:'#c4001d'}}>Save</Button>
              <Button style={{backgroundColor:'#8d6e63'}}>Cancel</Button>
            </div>
            </div>
    );
  }
}