import React from 'react';
import { Button, TextField, Paper } from '@material-ui/core';
import './ReadOnly.css'

export default class BasicDetailsReadOnly extends React.Component {
    state = {
        fullName:'ABCD XYZ',
        aadhaar:'Verified',
        height:'31 (26-11-1986)',
        religion:'Un-Married',
        motherTongue:'Hindi-MP',
        annualIncomeLocation:'Rs. 20 - 25 Lakh, Bangalore & Gwalior',
        caste:'Hindu: Aggarwal',
        sect:'Not filled in',
        profileManagedBy:'His profile is managed by Self'
    }
  render() {
    return (
      <div className='container'>
            <ul>
                <li>
                    <p>Full Name</p>
                    <p>{this.state.fullName}</p>
                </li>
                <li>
                    <p>Aadhaar</p>
                    <p>{this.state.aadhaar}</p>
                </li>
                <li>
                    <p>Height</p>
                    <p>{this.state.height}</p>
                </li>
                <li>
                    <p>Religion</p>
                    <p>{this.state.religion}</p>
                </li>
                <li>
                    <p>Mother Tongue</p>
                    <p>{this.state.motherTongue}</p>
                </li>
                <li>
                    <p>Annual Income, Location</p>
                    <p>{this.state.annualIncomeLocation}</p>
                </li>
                <li>
                    <p>Caste, Sect</p>
                    <p>{this.state.caste}</p>
                </li>
                <li>
                    <p>Profile managed by</p>
                    <p>{this.state.profileManagedBy}</p>
                </li>
            </ul>
        </div>
    )
  }
}