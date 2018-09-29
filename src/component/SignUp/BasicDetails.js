import React from 'react';
import { Button, TextField, Paper } from '@material-ui/core';

export default class BasicDetails extends React.Component {

  render() {
    return (
      <div style={{display:'flex', width:'100%', alignItems:'center', flexDirection:'column', backgroundColor:'#f5f5f5', height:'80vh'}}>
      <h4>BasicDetails</h4>
            <TextField
              autoFocus
              margin="dense"
              id="aadhar"
              label="Aadhar"
              style={{width:'40%',backgroundColor:'white', marginTop:'1%'}}
            />
            <TextField
              margin="dense"
              id="name"
              label="Full Name"
              style={{width:'40%',backgroundColor:'white', marginTop:'1%'}}
            />
            <TextField
              margin="dense"
              id="height"
              label="Height"
              style={{width:'40%',backgroundColor:'white', marginTop:'1%'}}
            />
            <TextField
              margin="dense"
              id="religion"
              label="Religion"
              style={{width:'40%',backgroundColor:'white', marginTop:'1%'}}
            />
            <TextField
              margin="dense"
              id="mothertongue"
              label="Mother Tongue"
              style={{width:'40%',backgroundColor:'white', marginTop:'1%'}}
            />
            <TextField
              margin="dense"
              id="caste"
              label="Caste"
              style={{width:'40%',backgroundColor:'white', marginTop:'1%'}}
            />
            <TextField
              margin="dense"
              id="subCaste"
              label="Subcaste"
              style={{width:'40%',backgroundColor:'white', marginTop:'1%'}}
            />
            <TextField
              margin="dense"
              id="sect"
              label="Sect"
              style={{width:'40%',backgroundColor:'white', marginTop:'1%'}}
            />
            <TextField
              margin="dense"
              id="country"
              label="Country Living In"
              style={{width:'40%',backgroundColor:'white', marginTop:'1%'}}
            />
            <TextField
              margin="dense"
              id="state"
              label="State Living In"
              style={{width:'40%',backgroundColor:'white', marginTop:'1%'}}
            />
            <TextField
              margin="dense"
              id="income"
              label="Annual Income"
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