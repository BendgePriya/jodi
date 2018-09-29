import React from 'react';
import { Button, TextField, Paper } from '@material-ui/core';

export default class Lifestyle extends React.Component {

  render() {
    return (
      <div style={{display:'flex', width:'100%', alignItems:'center', flexDirection:'column', backgroundColor:'#f5f5f5', height:'80vh'}}>
      <h4>Lifestyle</h4>
            <TextField
              autoFocus
              margin="dense"
              id="diet"
              label="Dietary Habits"
              style={{width:'40%',backgroundColor:'white', marginTop:'1%'}}
            />
            <TextField
              margin="dense"
              id="drink"
              label="Drinking Habits"
              style={{width:'40%',backgroundColor:'white', marginTop:'1%'}}
            />
            <TextField
              margin="dense"
              id="smoke"
              label="Smoking Habits"
              style={{width:'40%',backgroundColor:'white', marginTop:'1%'}}
            />
            <TextField
              margin="dense"
              id="pets"
              label="Open to Pets?"
              style={{width:'40%',backgroundColor:'white', marginTop:'1%'}}
            />
            <TextField
              margin="dense"
              id="house"
              label="Own a House?"
              style={{width:'40%',backgroundColor:'white', marginTop:'1%'}}
            />
            <TextField
              margin="dense"
              id="car"
              label="Own a Car?"
              style={{width:'40%',backgroundColor:'white', marginTop:'1%'}}
            />
            <TextField
              margin="dense"
              id="rStatus"
              label="Residential Status"
              style={{width:'40%',backgroundColor:'white', marginTop:'1%'}}
            />
            <TextField
              margin="dense"
              id="lang"
              label="Languages I Speak"
              style={{width:'40%',backgroundColor:'white', marginTop:'1%'}}
            />
            <TextField
              margin="dense"
              id="bodyType"
              label="Body Type"
              style={{width:'40%',backgroundColor:'white', marginTop:'1%'}}
            />
            <TextField
              margin="dense"
              id="complexion"
              label="Complexion"
              style={{width:'40%',backgroundColor:'white', marginTop:'1%'}}
            />
            <TextField
              margin="dense"
              id="weight"
              label="Weight(kgs)"
              style={{width:'40%',backgroundColor:'white', marginTop:'1%'}}
            />
            <TextField
              margin="dense"
              id="bloodGroup"
              label="Blood Group"
              style={{width:'40%',backgroundColor:'white', marginTop:'1%'}}
            />
            <TextField
              margin="dense"
              id="hiv"
              label="HIV+?"
              style={{width:'40%',backgroundColor:'white', marginTop:'1%'}}
            />
            <TextField
              margin="dense"
              id="thalassemia"
              label="Thalassemia"
              style={{width:'40%',backgroundColor:'white', marginTop:'1%'}}
            />
            <TextField
              margin="dense"
              id="challenged"
              label="Challenged"
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