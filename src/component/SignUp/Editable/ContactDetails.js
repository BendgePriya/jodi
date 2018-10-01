import React from 'react';
import { Button, TextField, Paper } from '@material-ui/core';
import './ContactDetails.css'

export default class ContactDetails extends React.Component {

  render() {
    return (
      <div className='contactDetailsContainer'>
            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="Email Id"
              type="email"
            />
            <TextField
              margin="dense"
              id="aEmail"
              label="Alternate Email Id"
              type="email"
            />
            <TextField
              margin="dense"
              id="mobNum"
              label="Mobile Number"
              type="number"
            />
            <TextField
              margin="dense"
              id="aMobNum"
              label="Alternate Mobile Number"
              type="number"
            />
            <TextField
              margin="dense"
              id="landline"
              label="Landline Number"
              type="number"
            />
            <TextField
              margin="dense"
              id="time"
              label="Suitable time to Call"
            />
            <TextField
              margin="dense"
              id="add"
              label="Contact Address"
            />
            <TextField
              margin="dense"
              id="pin"
              label="Pin Code"
            />
            <TextField
              margin="dense"
              id="pAdd"
              label="parent's Address"
            />
            <TextField
              margin="dense"
              id="pPin"
              label="Pin Code"
            />
            <div style={{backgroundColor:'transparent', marginTop:'5%'}}>
              <Button style={{backgroundColor:'#c4001d'}}>Save</Button>
              <Button style={{backgroundColor:'#8d6e63'}}>Cancel</Button>
            </div>
            </div>
    );
  }
}