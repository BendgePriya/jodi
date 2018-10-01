import React from 'react';
import { Button, TextField, Paper } from '@material-ui/core';
import './BasicDetails.css'
export default class BasicDetails extends React.Component {

  render() {
    return (
      <div className='basicDetailsContainer'>
            <TextField
              autoFocus
              margin="dense"
              id="aadhar"
              label="Aadhar"
            />
            <TextField
              margin="dense"
              id="name"
              label="Full Name"
            />
            <TextField
              margin="dense"
              id="height"
              label="Height"
            />
            <TextField
              margin="dense"
              id="religion"
              label="Religion"
            />
            <TextField
              margin="dense"
              id="mothertongue"
              label="Mother Tongue"
            />
            <TextField
              margin="dense"
              id="caste"
              label="Caste"
            />
            <TextField
              margin="dense"
              id="subCaste"
              label="Subcaste"
            />
            <TextField
              margin="dense"
              id="sect"
              label="Sect"
            />
            <TextField
              margin="dense"
              id="country"
              label="Country Living In"
            />
            <TextField
              margin="dense"
              id="state"
              label="State Living In"
            />
            <TextField
              margin="dense"
              id="income"
              label="Annual Income"
            /> 
            <div style={{backgroundColor:'transparent', marginTop:'1%', marginBottom:'1%'}}>
              <Button style={{backgroundColor:'#c4001d'}}>Save</Button>
              <Button style={{backgroundColor:'#8d6e63'}}>Cancel</Button>
            </div>
            </div>
    );
  }
}