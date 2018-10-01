import React from 'react';
import { Button, TextField, Paper } from '@material-ui/core';
import './AddressProof.css'
export default class AddressProof extends React.Component {

  render() {
    return (
      <div className='addressProofContainer'>
            <TextField
              autoFocus
              margin="dense"
              id="iProof"
              label="Id Proof"
            />
            <TextField
              margin="dense"
              id="aProof"
              label="Address Proof"
            />
            <div style={{backgroundColor:'transparent', marginTop:'5%'}}>
              <Button style={{backgroundColor:'#c4001d'}}>Save</Button>
              <Button style={{backgroundColor:'#8d6e63'}}>Cancel</Button>
            </div>
            </div>
    );
  }
}