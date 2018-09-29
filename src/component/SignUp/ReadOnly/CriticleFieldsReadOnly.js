import React from 'react';
import { Button, TextField, Paper } from '@material-ui/core';
import './ReadOnly.css'

export default class CriticalFieldsReadOnly extends React.Component {
state = {
    age:'31 (26-11-1986)',
    maritalStatus:'Un-Married'
}
  render() {
    return (
      <div className='container'>
            <ul>
                <li>
                    <p>Age</p>
                    <p>{this.state.age}</p>
                </li>
                <li>
                    <p>Marital Status</p>
                    <p>{this.state.maritalStatus}</p>
                </li>
            </ul>
        </div>
    )
  }
}