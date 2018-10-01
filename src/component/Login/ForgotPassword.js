import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CloseIcon from '@material-ui/icons/Close';
import   { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import './Login.css'
import {
  withRouter
} from 'react-router-dom'
class ForgotPassword extends React.Component {
  state = {
    open: true,
    isChecked:true,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };
  handleSendLink = () => {
    this.props.history.push('/');
  }
  handleClose = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          style={{display:'flex', alignItems:'center'}}
          maxWidth='xs'
        >
          <CloseIcon style={{paddingLeft:'90%',fontSize:'16px',marginTop:'5%', cursor:'pointer'}} onClick={this.handleClose}/>
          <DialogContent>
              <h4>Forgot Password</h4>
            <DialogContentText>
                <h5>Enter your registered email or phone number of Jeevansathi to receive an Email and SMS with the link to reset your password.</h5>
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="Register Email id / Primary Mob No"
              type="email"
              style={{width:'100%'}}
            />
          </DialogContent>
          <DialogActions style = {{display:'flex', flexDirection:'column'}}>
          <div style = {{textAlign:'center',width:'100%'}}>
          <Button onClick={this.handleSendLink} style={{width:'60%', backgroundColor:'#26c6da', color:'white'}}>
              Send Link
            </Button>
          </div>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
export default withRouter(ForgotPassword)