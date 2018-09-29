import React from 'react';
import { Button, TextField, Paper } from '@material-ui/core';
import './ReadOnlyShort.css'

export default class ContactDetailsReadOnly extends React.Component {
  render() {
    return (
      <div className='container1'>
            <ul>
                <li>
                    <p>Email id</p>
                    <p>abc.xyz@gmail.com</p>
                </li>
                <li>
                    <p>Alternate Email id</p>
                    <p>Not filled in</p>
                </li>
                <li>
                    <p>Mobile No.</p>
                    <p>+91-1234567890</p>
                </li>
                <li>
                    <p>Alternate No.</p>
                    <p>Not filled in</p>
                </li>
                <li>
                    <p>Landline No</p>
                    <p>Not filled in</p>
                </li>
                <li>
                    <p>Suitable time to call</p>
                    <p>Not filled in</p>
                </li>
                <li>
                    <p>Contact Address</p>
                    <p>Not filled in</p>
                </li>
                <li>
                    <p>Parent's Address</p>
                    <p>Not filled in</p>
                </li>
            </ul>
        </div>
    )
  }
}