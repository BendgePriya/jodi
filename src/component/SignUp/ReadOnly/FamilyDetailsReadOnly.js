import React from 'react';
import { Button, TextField, Paper } from '@material-ui/core';
import './ReadOnly.css'

export default class FamilyDetailsReadOnly extends React.Component {
  render() {
    return (
      <div className='container'>
            <ul>
                <li>
                    <p>Mother's Occupation</p>
                    <p>Housewife</p>
                </li>
                <li>
                    <p>Father's Occupation</p>
                    <p>Service - Private</p>
                </li>
                <li>
                    <p>Sister(s)</p>
                    <p>2 sisters of which 2 married</p>
                </li>
                <li>
                    <p>Brother(s)</p>
                    <p>0 brother</p>
                </li>
                <li>
                    <p>Gothra</p>
                    <p>mangal</p>
                </li>
                <li>
                    <p>Gothra (maternal)</p>
                    <p>Not filled in</p>
                </li>
                <li>
                    <p>Family Status</p>
                    <p>Not filled in</p>
                </li>
                <li>
                    <p>Family Income</p>
                    <p>Not filled in</p>
                </li>
                <li>
                    <p>Family Type</p>
                    <p>Nuclear Family</p>
                </li>
                <li>
                    <p>Family Values</p>
                    <p>Not filled in</p>
                </li>
                <li>
                    <p>Family based out of</p>
                    <p>Gwalior, Madhya Pradesh</p>
                </li>
            </ul>
        </div>
    )
  }
}