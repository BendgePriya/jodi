import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import LogIn from '../Login/LogIn'
import {
    withRouter
  } from 'react-router-dom'

class Header extends Component{
    constructor(props) {
        super(props)
    }
    render(){
        return (
        <div>
            <AppBar position="static" 
            style={{background:'transparent', boxShadow:'none', display:'flex', alignItems:'flex-end', color:'black'}}>
            <Toolbar>
                <LogIn/>
                <Button
                onClick={(event) => {
                    this.props.history.push('/signUp')
                }}
                style={{color:'#212121', fontWeight:'bold', fontSize:'20px'}}>
                SignUp
                </Button>
                </Toolbar>
            </AppBar>
    </div>
        );
    }
}
export default withRouter(Header);