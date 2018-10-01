import React from 'react';
import { Button, TextField, Paper } from '@material-ui/core';
import './CriticalFields.css'
export default class CriticalFields extends React.Component {

  render() {
    return (
      <div  className='criticalFieldsContainer'>
            <TextField
              autoFocus
              margin="dense"
              id="status"
              label="Marital Status"
            />
            <TextField
              margin="dense"
              id="dob"
              label="Date Of Birth"
              type="date"
            />
            <h6>We will not allow any change in Date of Birth and Marital Status after you submit this form. So please reconfirm the details carefully before submitting.
</h6>
            <div style={{backgroundColor:'transparent', marginTop:'1%', marginBottom:'1%'}}>
              <Button style={{backgroundColor:'#c4001d'}}>Save</Button>
              <Button style={{backgroundColor:'#8d6e63'}}>Cancel</Button>
            </div>
            </div>
    );
  }
}