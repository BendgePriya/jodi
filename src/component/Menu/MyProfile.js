import React, { Component } from 'react'
import { Button, Divider } from '@material-ui/core';
import * as profile from '../SignUp/Editable';
import * as ReadOnlyProfile from '../SignUp/ReadOnly'
import SignUpHeader from '../Header/SignUpHeader'
import './MyProfile.css'
class MyProfile extends Component{
    state={
        isCriticleFieldsReadOnly: true,
        isBasicDetailReadOnly: true,
        isAboutMeReadOnly: true,
        isEducationReadOnly: true,
        isFamilyDetailsReadOnly: true,
        isLifestyleReadOnly: true,
        isYourLikesReadOnly: true,
        isContactDetailsReadOnly: true,
        isHorosopeDetailsReadOnly: true,
        isAddressProofReadOnly:true
    }
    render(){
        return(
            <div style={{backgroundColor:'#f1f8e9'}}>
            <SignUpHeader/>
            <div style={{ display:'flex', paddingBottom:'1%', width:'80%',paddingLeft:'10%'}}>
                <div style={{ width:'80%', backgroundColor:'white', marginLeft:'1%'}}>
                    <div style={{marginTop:'2%', display:'block'}}>
                        <label style={{float:'left', paddingLeft:'1%', color:'#c4001d', fontSize:'17px'}}>Critical Fields</label>
                        <span style={{float:'left', paddingLeft:'0.5%', color:'#757575', fontSize:'14px'}}> - Can be edited only once in lifetime</span>
                        <label 
                        style={{color:'#c4001d',float:'right', paddingRight:'1%', fontSize:'15px', cursor:'pointer'}}
                        onClick={
                            (event)=> {
                                this.setState({isCriticleFieldsReadOnly: false})}
                                    }>Edit</label>
                        {(this.state.isCriticleFieldsReadOnly === true) 
                            ? <ReadOnlyProfile.CriticalFieldsReadOnly />
                            : <profile.CriticalFields />}
                    </div>
                    <Divider/>
                    <div style={{marginTop:'2%', display:'block'}}>
                        <label style={{float:'left', paddingLeft:'1%'}}>Basic Details</label>
                        <label 
                        style={{color:'red',float:'right', paddingRight:'1%'}}
                        onClick={
                            (event)=> {
                                this.setState({isBasicDetailReadOnly: false})}
                                    }>Edit</label>
                        {(this.state.isBasicDetailReadOnly === true) 
                            ? <ReadOnlyProfile.BasicDetailsReadOnly />
                            : <profile.BasicDetails />}
                    </div>
                    <Divider/>
                    <div style={{marginTop:'2%', display:'block'}}>
                        <label style={{float:'left', paddingLeft:'1%'}}>About me</label>
                        <label 
                        style={{color:'red',float:'right', paddingRight:'1%'}}
                        onClick={
                            (event)=> {
                                this.setState({isAboutMeReadOnly: false})}
                                    }>Edit</label>
                        {(this.state.isAboutMeReadOnly === true) 
                            ? <ReadOnlyProfile.AboutMeReadOnly />
                            : <profile.AboutMe />}
                    </div>
                    <Divider/>
                    <div style={{ marginTop:'2%', display:'block'}}>
                        <label style={{float:'left', paddingLeft:'1%'}}>Education & Career</label>
                        <label 
                        style={{color:'red',float:'right', paddingRight:'1%'}}
                        onClick={
                            (event)=> {
                                this.setState({isEducationReadOnly: false})}
                                    }>Edit</label>
                        {(this.state.isEducationReadOnly === true) 
                            ? <ReadOnlyProfile.EducationAndCareerReadOnly />
                            : <profile.EducationAndCareer />}
                    </div>
                    <Divider/>
                    <div style={{ marginTop:'2%', display:'block'}}>
                        <label style={{float:'left', paddingLeft:'1%'}}>Family Details</label>
                        <label 
                        style={{color:'red',float:'right', paddingRight:'1%'}}
                        onClick={
                            (event)=> {
                                this.setState({isFamilyDetailsReadOnly: false})}
                                    }>Edit</label>
                        {(this.state.isFamilyDetailsReadOnly === true) 
                            ? <ReadOnlyProfile.FamilyDetailsReadOnly />
                            : <profile.FamilyDetails />}
                    </div>
                    <Divider/>
                    <div style={{ marginTop:'2%', display:'block'}}>
                        <label style={{float:'left', paddingLeft:'1%'}}>Lifestyle</label>
                        <label style={{color:'red',float:'right', paddingRight:'1%'}}
                        onClick={
                            (event)=> {
                                this.setState({isLifestyleReadOnly: false})}
                                    }>Edit</label>
                        {(this.state.isLifestyleReadOnly === true) 
                            ? <ReadOnlyProfile.LifestyleReadOnly />
                            : <profile.Lifestyle />}
                    </div>
                    <Divider/>
                    <div style={{ marginTop:'2%', display:'block'}}>
                        <label style={{float:'left', paddingLeft:'1%'}}>Your Likes</label>
                        <label style={{color:'red',float:'right', paddingRight:'1%'}}
                        onClick={
                            (event)=> {
                                this.setState({isYourLikesReadOnly: false})}
                                    }>Edit</label>
                        {(this.state.isYourLikesReadOnly === true) 
                            ? <ReadOnlyProfile.YourLikesReadOnly />
                            : <profile.YourLikes />}
                    </div>
                </div>
            <div style={{ margin:' 0 1%', width:'20%', backgroundColor:'white'}}>
            <div style={{ marginTop:'8%', display:'block'}}>
                    <label style={{float:'left', paddingLeft:'4%'}}>Contact Details</label>
                    <label 
                    style={{color:'red',float:'right', paddingRight:'4%'}}
                    onClick={
                        (event)=> {
                            this.setState({isContactDetailsReadOnly: false})}
                                }>Edit</label>
                    {(this.state.isContactDetailsReadOnly === true) 
                                ? <ReadOnlyProfile.ContactDetailsReadOnly />
                                : <profile.ContactDetails />}
                </div>
                <Divider/>
                <div style={{ marginTop:'8%', display:'block'}}>
                    <label style={{float:'left', paddingLeft:'4%'}}>Horoscope Details</label>
                    <label 
                    style={{color:'red',float:'right', paddingRight:'4%'}}
                    onClick={
                        (event)=> {
                            this.setState({isHorosopeDetailsReadOnly: false})}
                                }>Edit</label>
                                {(this.state.isHorosopeDetailsReadOnly === true) 
                                ? <ReadOnlyProfile.HoroscopeDetailsReadOnly />
                                : <profile.HoroscopeDetails />}
                </div>
                <div style={{ marginTop:'8%', display:'block'}}>
                    <label style={{float:'left', paddingLeft:'4%'}}>ID & Address Proof</label>
                    <label 
                    style={{color:'red',float:'right', paddingRight:'4%'}}
                    onClick={
                        (event)=> {
                            this.setState({isAddressProofReadOnly: false})}
                                }>Edit</label>
                                {(this.state.isAddressProofReadOnly === true) 
                                ? <ReadOnlyProfile.AddressProofReadOnly />
                                : <profile.AddressProof />}
                </div>
            </div>
            </div>
            </div>
        )
    }
}
export default MyProfile;