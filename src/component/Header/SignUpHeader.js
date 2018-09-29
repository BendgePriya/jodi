import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import signUpHeader from '../../images/signUpHeader.jpg'
class SignUpHeader extends Component{
    constructor(props) {
        super(props)
    }
    render(){
        return (
        <div style={{backgroundImage: 'url('+signUpHeader+')',height:'20vh'}}>
            <AppBar position="static" 
            style={{boxShadow:'none', display:'flex', alignItems:'flex-end', 
            color:'black', backgroundColor: 'transparent'}}>
            {/* <Toolbar>
                <h4 style={{color:'white', marginTop:'50%'}}>Account Details</h4>
                </Toolbar> */}
            </AppBar>
        </div>
        );
    }
}
export default SignUpHeader;