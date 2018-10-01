import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import   { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import loginImage from '../../images/login.jpg'
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import CloseIcon from '@material-ui/icons/Close';
//import MenuBar from '../Menu/MenuBar'
import './Login.css'
import {
  withRouter
} from 'react-router-dom'
class LogIn extends React.Component {
  state = {
    open: false,
    isChecked:true,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };
  handleSignIn = () => {
    this.props.history.push('/MenuBar');
  }
  handleSignUp = () => {
    this.props.history.push('/signUp')
  }
  handleForgotPassword = () => {
    this.props.history.push('/ForgotPassword')
  }
  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleClickOpen} style={{color:'#212121', fontWeight:'bold', fontSize:'20px'}}>LogIn</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          style={{display:'flex', alignItems:'center'}}
          maxWidth='xs'
        >
          <CloseIcon style={{paddingLeft:'90%',fontSize:'16px',marginTop:'5%', cursor:'pointer'}} onClick={this.handleClose}/>
          <DialogContent>
              <div style = {{ height:'10%',display:'flex', alignItems:'center'}}>
              <img src = {loginImage} style = {{width:'15%', height:'10%'}}/>
              </div>
            <DialogContentText>
                <h3>Login with your Email Id</h3 >
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="Email Address"
              type="email"
              style={{width:'100%'}}
            />
            <TextField
              margin="dense"
              id="pwd"
              label="Password"
              type="password"
              style={{width:'100%'}}
            />
          </DialogContent>
          <DialogActions style = {{display:'flex', flexDirection:'column'}}>
          <div style = {{width:'100%',display:'flex', flexDirection:'row'}}>
          <Checkbox
          checked={this.state.isChecked}
        //   onChange={this.handleChange('isChecked')}
          value="isChecked"
          style={{color:'#64b5f6'}}
        />
          <h5> Stay signed In </h5>
          <h5 onClick={this.handleForgotPassword} style={{color:'#26c6da', marginLeft:'15%', cursor:'pointer'}}> Forgot Password? </h5>
          </div>
          <div style = {{textAlign:'center',width:'100%'}}>
          <Button onClick={this.handleSignIn} color="primary" style={{width:'60%', backgroundColor:'#26c6da', color:'white'}}>
              SignIn
            </Button>
          </div>
          <div style = {{textAlign:'center',width:'100%'}}>
          <h5> New to shadi.com?</h5>
          <h5  onClick={this.handleSignUp} style={{color:'#26c6da', cursor:'pointer'}}> SignUp Free </h5>
          </div>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
export default withRouter(LogIn)