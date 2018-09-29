import React from 'react';
import { Button, TextField, Paper } from '@material-ui/core';
import './ReadOnly.css'

export default class EducationAndCareerReadOnly extends React.Component {
    state = {
        highestEducation:'BCA',
        schoolName:'saraswati Shishu mandir badalgarh Gwalior',
        uGDegree:'BCA',
        pGDegree:'Not Applicable',
        uGCollege:'Prestige Institute of Management',
        pGCollege:'Not Applicable',
        otherUGDegreeste:'Not filled in',
        otherPGDegree:'Not Applicable',
        occupation:'Software Professional'
    }
  render() {
    return (
      <div className='container'>
            <ul>
                <li>
                    <p>Highest Education</p>
                    <p>{this.state.highestEducation}</p>
                </li>
                <li>
                    <p>School Name</p>
                    <p>{this.state.schoolName}</p>
                </li>
                <li>
                    <p>UG Degree</p>
                    <p>{this.state.uGDegree}</p>
                </li>
                <li>
                    <p>PG Degree</p>
                    <p>{this.state.pGDegree}</p>
                </li>
                <li>
                    <p>UG College</p>
                    <p>{this.state.uGCollege}</p>
                </li>
                <li>
                    <p>PG College</p>
                    <p>{this.state.pGCollege}</p>
                </li>
                <li>
                    <p>Other UG Degree</p>
                    <p>{this.state.otherUGDegreeste}</p>
                </li>
                <li>
                    <p>Other PG Degree</p>
                    <p>{this.state.otherPGDegree}</p>
                </li>
                <li>
                    <p>Occupation</p>
                    <p>{this.state.occupation}</p>
                </li>
                <li>
                    <p>Organization Name</p>
                    <p>Target Corporation India Pvt Ltd</p>
                </li>
                <li>
                    <p>Annual Income</p>
                    <p>Rs. 20 - 25 Lakh</p>
                </li>
            </ul>
        </div>
    )
  }
}