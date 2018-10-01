import React from 'react';
import { Button, TextField, Paper } from '@material-ui/core';
import './HoroscopeDetails.css'

export default class HoroscopeDetails extends React.Component {

  render() {
    return (
      <div className='horoscopeContainer'>
            <TextField
              autoFocus
              margin="dense"
              id="place"
              label="Place of Birth"
            />
            <TextField
              margin="dense"
              id="date"
              label="Date of Birth"
              type="date"
            />
            <TextField
              margin="dense"
              id="time"
              label="Time of Birth"
              type="time"
            />
            <TextField
              margin="dense"
              id="match"
              label="Horoscope match is must?"
            />
            <TextField
              margin="dense"
              id="sunSign"
              label="Sun Sign"
            />
            <TextField
              margin="dense"
              id="rashi"
              label="Rashi/Moon Sign"
            />
            <TextField
              margin="dense"
              id="nakshatra"
              label="Nakshatra"
            />
            <TextField
              margin="dense"
              id="manglik"
              label="Manglik"
            />
            <TextField
              margin="dense"
              id="privacy"
              label="Horoscope Privacy"
            />
            <div style={{backgroundColor:'transparent', marginTop:'5%'}}>
              <Button style={{backgroundColor:'#c4001d'}}>Save</Button>
              <Button style={{backgroundColor:'#8d6e63'}}>Cancel</Button>
            </div>
            <Button style={{width:'80%'}}>
              View Horoscope
            </Button>
            <Button style={{width:'80%'}}>
              Remove Horoscope
            </Button>
            </div>
    );
  }
}