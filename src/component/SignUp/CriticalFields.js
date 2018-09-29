import React from 'react';
import { Button, TextField, Paper } from '@material-ui/core';

export default class CriticalFields extends React.Component {

  render() {
    return (
      <div style={{display:'flex', width:'100%', alignItems:'center', flexDirection:'column', backgroundColor:'#f5f5f5', height:'80vh'}}>
            <TextField
              autoFocus
              margin="dense"
              id="status"
              label="Marital Status"
              style={{width:'40%',backgroundColor:'white', marginTop:'1%'}}
            />
            <TextField
              margin="dense"
              id="dob"
              label="Date Of Birth"
              type="date"
              style={{width:'40%',backgroundColor:'white', marginTop:'1%'}}
            />
            <h5>We will not allow any change in Date of Birth and Marital Status after you submit this form. So please reconfirm the details carefully before submitting.
</h5>
            <div>
            <Button color="primary" style={{width:'20%', backgroundColor:'#26c6da', color:'white', marginTop:'1%'}}>
              Save
            </Button>
            <Button color="primary" style={{width:'20%', backgroundColor:'#26c6da', color:'white', marginTop:'1%'}}>
              Cancel
            </Button>
            </div>
            </div>
    );
  }
}