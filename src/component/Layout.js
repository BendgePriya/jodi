import React, { Component } from 'react'
import DatingImg from '../images/dating_couple.jpg'
import Header from './Header/Header'
class Layout extends Component{
    render(){
        return(
            <div style={{backgroundImage: 'url('+DatingImg+')', 
            height:'100vh', backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'}}>
            <Header/>
            </div>
        )
    }
}
export default Layout;