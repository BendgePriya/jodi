import React from 'react';
import { Button, TextField, Paper } from '@material-ui/core';
import './ReadOnly.css'

export default class AboutMeReadOnly extends React.Component {
    state = {
        fullName:'Parag Mangal',
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
                <li style={{width:'80%'}}>
                    <p>Hi,</p>
                    <p> Thanks for vising my profile. I born and brought up in Gwalior(M.P.)  I like to go for shopping and visit new places. For a long happy married relationship, I consider trust as a big factor. I believe to discuss on matters, instead of keeping things in mind and this approach makes relationship more stronger.</p>
                    <p> For me, Marriage is not just a custom to follow but it's a beautiful love relationship. There should be a fun, Love, bindaas Masti in marriage life. A couple should be more comfortable to express their feelings without thinking too much. If you also have similar thoughts about marriage please do accept or send requests.</p>
                    <p>About My Family</p>
                    <p> I have very sweet and small family, parents and 2 sisters. My father is an advocate in M.P. High Court. My mother is homemaker. Both sisters are married and happily living in their families. Parents are staying at our own house in native place Gwalior M.P. and I am working in MNC in Bangalore.</p>
                    <p>Education</p>
                    <p>Not filled in</p>
                    <p>Occupation</p>
                    <p> I am a software professional and currently working with US based MNC "Target Corporation India" in Bangalore at package of 22.5 lacs per annum.</p>
                </li>
            </ul>
        </div>
    )
  }
}