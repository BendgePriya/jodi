import React, { Component } from 'react'
import DatingImg from '../images/dating_couple.jpg'
import SignUpHeader from './Header/SignUpHeader'
import SignUp from './SignUp/SignUp'
class SignUpLayout extends Component{
    render(){
        return(
            <div>
            <SignUpHeader/>
            <SignUp />
            </div>
        )
    }
}
export default SignUpLayout;