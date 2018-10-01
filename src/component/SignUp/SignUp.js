import React from 'react';
import { Button, TextField, Paper } from '@material-ui/core';
import MenuBar from '../Menu/MenuBar'
import {
  withRouter
} from 'react-router-dom'

class SignUp extends React.Component {
  handleRegiser = () => {
    this.props.history.push('/MenuBar');
  };
  handleLogin = () => {
    this.props.history.push('/Login');
  };
  render() {
    return (
      <div style={{display:'flex', width:'100%', alignItems:'center', flexDirection:'column', backgroundColor:'#f1f8e9', height:'80vh'}}>
            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="Your Email"
              type="email"
              style={{width:'40%',backgroundColor:'white', marginTop:'1%'}}
            />
            <TextField
              margin="dense"
              id="pwd"
              label="Your Password"
              type="password"
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
              id="dob"
              label="Date Of Birth"
              type="date"
              style={{width:'40%',backgroundColor:'white', marginTop:'1%'}}
            />
            <TextField
              margin="dense"
              id="mobNum"
              label="Mobile Number"
              type="number"
              style={{width:'40%',backgroundColor:'white', marginTop:'1%'}}
            />
            <Button onClick={this.handleRegiser} color="primary" style={{width:'20%', backgroundColor:'#26c6da', color:'white', marginTop:'1%'}}>
              Regiser Me
            </Button>
            <div style={{display:'flex', flexDirection:'row'}}>
            <h4>Already a Member?</h4>&nbsp;&nbsp;
            <h4 onClick={this.handleLogin} style={{color:'#26c6da'}}>Login</h4>
            </div>
            </div>
    );
  }
}
export default withRouter(SignUp)