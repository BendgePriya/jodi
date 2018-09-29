import React from 'react';
import { Button, TextField, Paper } from '@material-ui/core';

export default class FamilyDetails extends React.Component {

  render() {
    return (
      <div style={{display:'flex', width:'100%', alignItems:'center', flexDirection:'column', backgroundColor:'#f5f5f5', height:'80vh'}}>
      <h4>Family Details</h4>
            <TextField
              autoFocus
              margin="dense"
              id="mother"
              label="Mother Is"
              style={{width:'40%',backgroundColor:'white', marginTop:'1%'}}
            />
            <TextField
              margin="dense"
              id="father"
              label="Father Is"
              style={{width:'40%',backgroundColor:'white', marginTop:'1%'}}
            />
            <TextField
              margin="dense"
              id="sis"
              label="Sister(s)"
              style={{width:'40%',backgroundColor:'white', marginTop:'1%'}}
            />
            <TextField
              margin="dense"
              id="bro"
              label="Brother(s)"
              style={{width:'40%',backgroundColor:'white', marginTop:'1%'}}
            />
            <TextField
              margin="dense"
              id="gothra"
              label="Gothra"
              style={{width:'40%',backgroundColor:'white', marginTop:'1%'}}
            />
            <TextField
              margin="dense"
              id="fStatus"
              label="Family Status"
              style={{width:'40%',backgroundColor:'white', marginTop:'1%'}}
            />
            <TextField
              margin="dense"
              id="fIncome"
              label="Family Income"
              style={{width:'40%',backgroundColor:'white', marginTop:'1%'}}
            />
            <TextField
              margin="dense"
              id="type"
              label="Family Type"
              style={{width:'40%',backgroundColor:'white', marginTop:'1%'}}
            />
            <TextField
              margin="dense"
              id="fValues"
              label="Family Values"
              style={{width:'40%',backgroundColor:'white', marginTop:'1%'}}
            />
            <TextField
              margin="dense"
              id="fBased"
              label="Family based out of"
              style={{width:'40%',backgroundColor:'white', marginTop:'1%'}}
            />
            <TextField
              margin="dense"
              id="city"
              label="Select City"
              style={{width:'40%',backgroundColor:'white', marginTop:'1%'}}
            />
            <TextField
              margin="dense"
              id="living"
              label="Living with parents?"
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