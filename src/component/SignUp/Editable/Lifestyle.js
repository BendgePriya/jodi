import React from 'react';
import { Button, TextField, Paper } from '@material-ui/core';
import './Lifestyle.css'
export default class Lifestyle extends React.Component {

  render() {
    return (
      <div className='lifestyleContainer'>
            <TextField
              autoFocus
              margin="dense"
              id="diet"
              label="Dietary Habits"
            />
            <TextField
              margin="dense"
              id="drink"
              label="Drinking Habits"
            />
            <TextField
              margin="dense"
              id="smoke"
              label="Smoking Habits"
            />
            <TextField
              margin="dense"
              id="pets"
              label="Open to Pets?"
            />
            <TextField
              margin="dense"
              id="house"
              label="Own a House?"
            />
            <TextField
              margin="dense"
              id="car"
              label="Own a Car?"
            />
            <TextField
              margin="dense"
              id="rStatus"
              label="Residential Status"
            />
            <TextField
              margin="dense"
              id="lang"
              label="Languages I Speak"
            />
            <TextField
              margin="dense"
              id="bodyType"
              label="Body Type"
            />
            <TextField
              margin="dense"
              id="complexion"
              label="Complexion"
            />
            <TextField
              margin="dense"
              id="weight"
              label="Weight(kgs)"
            />
            <TextField
              margin="dense"
              id="bloodGroup"
              label="Blood Group"
            />
            <TextField
              margin="dense"
              id="hiv"
              label="HIV+?"
            />
            <TextField
              margin="dense"
              id="thalassemia"
              label="Thalassemia"
            />
            <TextField
              margin="dense"
              id="challenged"
              label="Challenged"
            />
            <div style={{backgroundColor:'transparent', marginTop:'1%', marginBottom:'1%'}}>
              <Button style={{backgroundColor:'#c4001d'}}>Save</Button>
              <Button style={{backgroundColor:'#8d6e63'}}>Cancel</Button>
            </div>
            </div>
    );
  }
}