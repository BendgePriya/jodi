import React from 'react';
import { Button, TextField, Paper } from '@material-ui/core';

export default class AddressProof extends React.Component {

  render() {
    return (
      <div style={{display:'flex', width:'100%', alignItems:'center', flexDirection:'column', backgroundColor:'#f5f5f5', height:'80vh'}}>
      <h4>Id & Address Proof</h4>
            <TextField
              autoFocus
              margin="dense"
              id="iProof"
              label="Id Proof"
              style={{width:'40%',backgroundColor:'white', marginTop:'1%'}}
            />
            <TextField
              margin="dense"
              id="aProof"
              label="Address Proof"
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