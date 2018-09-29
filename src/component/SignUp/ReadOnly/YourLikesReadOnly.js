import React from 'react';
import { Button, TextField, Paper } from '@material-ui/core';
import './ReadOnly.css'

export default class YourLikesReadOnly extends React.Component {
  render() {
    return (
      <div className='container'>
            <ul>
                <li>
                    <p>Appearance</p>
                    <p>Average, Fair, 71 Kg</p>
                </li>
                <li>
                    <p>Habits</p>
                    <p>Eggetarian, Drinks occasionally, Doesn't smoke</p>
                </li>
                <li>
                    <p>Assets</p>
                    <p>House - Yes, Car - No</p>
                </li>
                <li>
                    <p>Languages Known</p>
                    <p>English, Hindi</p>
                </li>
                <li>
                    <p>Blood Group</p>
                    <p>O+</p>
                </li>
                <li>
                    <p>Residential Status</p>
                    <p>Citizen</p>
                </li>
                <li>
                    <p>Special Cases</p>
                    <p>Challenged - None, Thalassemia?, HIV+ - No</p>
                </li>
            </ul>
        </div>
    )
  }
}