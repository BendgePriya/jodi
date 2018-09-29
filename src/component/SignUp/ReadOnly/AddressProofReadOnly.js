import React from 'react';
import { Button, TextField, Paper } from '@material-ui/core';
import './ReadOnlyShort.css'

export default class AddressProofReadOnly extends React.Component {
  render() {
    return (
      <div className='container1'>
            <ul>
                <li>
                    <p>ID Proof</p>
                    <p>Not filled in</p>
                </li>
                <li>
                    <p>Address Proof</p>
                    <p>Not filled in</p>
                </li>
            </ul>
        </div>
    )
  }
}