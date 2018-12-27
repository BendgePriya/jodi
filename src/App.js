import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './component/Layout'
import SignUpLayout from './component/SignUpLayout'
import MenuBar from './component/Menu/MenuBar'
import MyProfile from './component/Menu/MyProfile'
import { BrowserRouter, Route } from 'react-router-dom'
import ForgotPassword from './component/Login/ForgotPassword';
import Login from './component/Login/LogIn'
import Search from './component/Search/Search'

class App extends Component {
  render() {
    return (
       <Search/>
      // <BrowserRouter>
      // <div className="App">
      // <Route path="/" exact component={Layout}></Route>
      // <Route path="/SignUp" component={SignUpLayout}></Route>
      // <Route path="/MenuBar" component={MenuBar}></Route>
      // <Route path="/MyProfile" component={MyProfile}></Route>
      // <Route path="/ForgotPassword" component={ForgotPassword}></Route>
      // <Route path="/Login" component={Login}></Route>
      // </div>
      // </BrowserRouter>    
    );
  }
}

export default App;
