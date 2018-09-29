import React from 'react';
import { Button, TextField, Paper, Input,InputLabel, OutlinedInput } from '@material-ui/core';

export default class AboutMe extends React.Component {

  render() {
    return (
      <div style={{display:'flex', width:'100%', alignItems:'center', flexDirection:'column', backgroundColor:'#f5f5f5', height:'80vh'}}>
      <h4>Critical Fields - Can be edited only once in lifetime</h4>
            <OutlinedInput
              autoFocus
              margin="dense"
              id="aboutMe"
              multiline
              style={{width:'40%',backgroundColor:'white', marginTop:'1%',height:'40%', padding:'0'}} />
            <InputLabel style={{width:'40%', backgroundColor:'#bdbdbd',fontSize:'12px', textAlign:'left'}}>
            Introduce yourself. Write about your values, beliefs/goals and aspirations.How do you describe yourself ? Your interests and hobbies.</InputLabel>
            <InputLabel style={{textAlign:'left', marginTop:'1%'}}>About My Family</InputLabel>
            <OutlinedInput
              margin="dense"
              id="aboutMyFamily"
              multiline
              style={{width:'40%',backgroundColor:'white', marginTop:'1%',height:'40%', padding:'0'}} />
            <InputLabel style={{textAlign:'left', marginTop:'1%'}}>About My Education</InputLabel>
            <OutlinedInput
              margin="dense"
              id="aboutMyEducation"
              multiline
              style={{width:'40%',backgroundColor:'white', marginTop:'1%',height:'40%', padding:'0'}} />
            <InputLabel style={{textAlign:'left', marginTop:'1%'}}>About My Career</InputLabel>
            <OutlinedInput
              margin="dense"
              id="aboutMyCareer"
              multiline
              style={{width:'40%',backgroundColor:'white', marginTop:'1%',height:'40%', padding:'0'}} />
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