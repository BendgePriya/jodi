import React from 'react';
import { Button, TextField, Paper } from '@material-ui/core';
import './EducationAndCareer.css'
export default class EducationAndCareer extends React.Component {

  render() {
    return (
      <div className='educationAndCareerContainer'>
            <TextField
              autoFocus
              margin="dense"
              id="education"
              label="Highest Education"
            />
            <TextField
              margin="dense"
              id="schoolName"
              label="School Name"
            />
            <TextField
              margin="dense"
              id="degree"
              label="UG Degree"
            />
            <TextField
              margin="dense"
              id="college"
              label="UG College"
            />
            <TextField
              margin="dense"
              id="other"
              label="Other UG Degree"
            />
            <TextField
              margin="dense"
              id="occupation"
              label="Occupation"
            />
            <TextField
              margin="dense"
              id="orgName"
              label="Organization Name"
            />
            <TextField
              margin="dense"
              id="income"
              label="Annual Income"
            />
            <TextField
              margin="dense"
              id="interest"
              label="Interested in settling abroad?"
            />
            <div style={{backgroundColor:'transparent', marginTop:'1%', marginBottom:'1%'}}>
              <Button style={{backgroundColor:'#c4001d'}}>Save</Button>
              <Button style={{backgroundColor:'#8d6e63'}}>Cancel</Button>
            </div>
            </div>
    );
  }
}