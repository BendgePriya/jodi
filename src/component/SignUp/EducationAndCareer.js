import React from 'react';
import { Button, TextField, Paper } from '@material-ui/core';

export default class EducationAndCareer extends React.Component {

  render() {
    return (
      <div style={{display:'flex', width:'100%', alignItems:'center', flexDirection:'column', backgroundColor:'#f5f5f5', height:'80vh'}}>
      <h4>Education & Career</h4>
            <TextField
              autoFocus
              margin="dense"
              id="education"
              label="Highest Education"
              style={{width:'40%',backgroundColor:'white', marginTop:'1%'}}
            />
            <TextField
              margin="dense"
              id="schoolName"
              label="School Name"
              style={{width:'40%',backgroundColor:'white', marginTop:'1%'}}
            />
            <TextField
              margin="dense"
              id="degree"
              label="UG Degree"
              style={{width:'40%',backgroundColor:'white', marginTop:'1%'}}
            />
            <TextField
              margin="dense"
              id="college"
              label="UG College"
              style={{width:'40%',backgroundColor:'white', marginTop:'1%'}}
            />
            <TextField
              margin="dense"
              id="other"
              label="Other UG Degree"
              style={{width:'40%',backgroundColor:'white', marginTop:'1%'}}
            />
            <TextField
              margin="dense"
              id="occupation"
              label="Occupation"
              style={{width:'40%',backgroundColor:'white', marginTop:'1%'}}
            />
            <TextField
              margin="dense"
              id="orgName"
              label="Organization Name"
              style={{width:'40%',backgroundColor:'white', marginTop:'1%'}}
            />
            <TextField
              margin="dense"
              id="income"
              label="Annual Income"
              style={{width:'40%',backgroundColor:'white', marginTop:'1%'}}
            />
            <TextField
              margin="dense"
              id="interest"
              label="Interested in settling abroad?"
              style={{width:'40%',backgroundColor:'white', marginTop:'1%'}}
            />
            <Button color="primary" style={{width:'20%', backgroundColor:'#26c6da', color:'white', marginTop:'1%'}}>
              Save
            </Button>
            <Button color="primary" style={{width:'20%', backgroundColor:'#26c6da', color:'white', marginTop:'1%'}}>
              Cancel
            </Button>
            </div>
    );
  }
}