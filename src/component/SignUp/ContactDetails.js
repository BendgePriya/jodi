import React from 'react';
import { Button, TextField, Paper } from '@material-ui/core';

export default class ContactDetails extends React.Component {

  render() {
    return (
      <div style={{display:'flex', width:'100%', alignItems:'center', flexDirection:'column', backgroundColor:'#f5f5f5', height:'80vh'}}>
      <h4>Contact Details</h4>
            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="Email Id"
              type="email"
              style={{width:'40%',backgroundColor:'white', marginTop:'1%'}}
            />
            <TextField
              autoFocus
              margin="dense"
              id="aEmail"
              label="Alternate Email Id"
              type="email"
              style={{width:'40%',backgroundColor:'white', marginTop:'1%'}}
            />
            <TextField
              margin="dense"
              id="mobNum"
              label="Mobile Number"
              type="number"
              style={{width:'40%',backgroundColor:'white', marginTop:'1%'}}
            />
            <TextField
              margin="dense"
              id="aMobNum"
              label="Alternate Mobile Number"
              type="number"
              style={{width:'40%',backgroundColor:'white', marginTop:'1%'}}
            />
            <TextField
              margin="dense"
              id="landline"
              label="Landline Number"
              type="number"
              style={{width:'40%',backgroundColor:'white', marginTop:'1%'}}
            />
            <TextField
              margin="dense"
              id="time"
              label="Suitable time to Call"
              style={{width:'40%',backgroundColor:'white', marginTop:'1%'}}
            />
            <TextField
              margin="dense"
              id="add"
              label="Contact Address"
              style={{width:'40%',backgroundColor:'white', marginTop:'1%', height:'30%'}}
            />
            <TextField
              margin="dense"
              id="pin"
              label="Pin Code"
              style={{width:'40%',backgroundColor:'white', marginTop:'1%'}}
            />
            <TextField
              margin="dense"
              id="pAdd"
              label="parent's Address"
              style={{width:'40%',backgroundColor:'white', marginTop:'1%', height:'30%'}}
            />
            <TextField
              margin="dense"
              id="pPin"
              label="Pin Code"
              style={{width:'40%',backgroundColor:'white', marginTop:'1%'}}
            />
            <Button onClick={this.handleNext} color="primary" style={{width:'20%', backgroundColor:'#26c6da', color:'white', marginTop:'1%'}}>
              Save
            </Button>
            <Button onClick={this.handleNext} color="primary" style={{width:'20%', backgroundColor:'#26c6da', color:'white', marginTop:'1%'}}>
              Cancle
            </Button>
            <div style={{display:'flex', flexDirection:'row'}}>
            <h4>Already a Member?</h4>&nbsp;&nbsp;
            <h4 style={{color:'#26c6da'}}>Login</h4>
            </div>
            </div>
    );
  }
}