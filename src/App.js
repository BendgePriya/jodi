import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './component/Layout'
import SignUpLayout from './component/SignUpLayout'
import SimpleTabs from './component/Tabs/SimpleTabs'
import { BrowserRouter, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <Route path="/" exact component={Layout}></Route>
      <Route path="/SignUp" component={SignUpLayout}></Route>
      <Route path="/SimpleTabs" component={SimpleTabs}></Route>
      </div>
      </BrowserRouter>    
    );
  }
}

export default App;
