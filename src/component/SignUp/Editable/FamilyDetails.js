import React from 'react';
import { Button, TextField, Paper } from '@material-ui/core';
import './FamilyDetails.css'
export default class FamilyDetails extends React.Component {

  render() {
    return (
      <div className='familyDetailsContainer'>
            <TextField
              autoFocus
              margin="dense"
              id="mother"
              label="Mother Is"
            />
            <TextField
              margin="dense"
              id="father"
              label="Father Is"
            />
            <TextField
              margin="dense"
              id="sis"
              label="Sister(s)"
            />
            <TextField
              margin="dense"
              id="bro"
              label="Brother(s)"
            />
            <TextField
              margin="dense"
              id="gothra"
              label="Gothra"
            />
            <TextField
              margin="dense"
              id="fStatus"
              label="Family Status"
            />
            <TextField
              margin="dense"
              id="fIncome"
              label="Family Income"
            />
            <TextField
              margin="dense"
              id="type"
              label="Family Type"
            />
            <TextField
              margin="dense"
              id="fValues"
              label="Family Values"
            />
            <TextField
              margin="dense"
              id="fBased"
              label="Family based out of"
            />
            <TextField
              margin="dense"
              id="city"
              label="Select City"
            />
            <TextField
              margin="dense"
              id="living"
              label="Living with parents?"
            />
            <div style={{backgroundColor:'transparent', marginTop:'1%', marginBottom:'1%'}}>
              <Button style={{backgroundColor:'#c4001d'}}>Save</Button>
              <Button style={{backgroundColor:'#8d6e63'}}>Cancel</Button>
            </div>
            </div>
    );
  }
}