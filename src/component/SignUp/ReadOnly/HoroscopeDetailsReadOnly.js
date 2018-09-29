import React from 'react';
import { Button, TextField, Paper } from '@material-ui/core';
import './ReadOnlyShort.css'

export default class HoroscopeDetailsReadOnly extends React.Component {
  render() {
    return (
      <div className='container1'>
            <ul>
                <li>
                    <p>Place of Birth</p>
                    <p>Gwalior, Madhya Pradesh, India</p>
                </li>
                <li>
                    <p>Date of Birth</p>
                    <p>Nov 26, 1986</p>
                </li>
                <li>
                    <p>Time of Birth</p>
                    <p>09 hrs:05 mins</p>
                    <p>Horoscope match is Must</p>
                </li>
                <li>
                    <p>Sun sign</p>
                    <p>Sagittarius</p>
                </li>
                <li>
                    <p>Rashi/Moon Sign</p>
                    <p>Simha</p>
                </li>
                <li>
                    <p>Nakshatra</p>
                    <p>Uttarapalguni/ Uthram</p>
                </li>
                <li>
                    <p>Manglik</p>
                    <p>Non-Manglik</p>
                </li>
                <li>
                    <p>Horoscope Privacy</p>
                    <p>Horoscope shown to others</p>
                </li>
            </ul>
        </div>
    )
  }
}