import React from 'react';
import Typography from '@material-ui/core/Typography';
import MyProfile from './MyProfile'
import './MenuBar.css'
import HomePage from '../../images/homePage.jpg'
class MenuBar extends React.Component {
  state = {
    value: 0,
  };

  render() {
    return (
      <div style={{backgroundImage: 'url('+HomePage+')', 
      height:'100vh', backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'}}>
      <div className='Menucontainer'>
        <ul>
          <li>
            HOME
          </li>
          <li>
            MATCHES
          </li>
          <li>
            INBOX
          </li>
          <li>
            SEARCH
          </li>
          <li>
            UPGRADE
          </li>
          <li>
            HELP
          </li>
          <li>
            NOTIFICATION
          </li>
          <li onClick={(event)=> this.props.history.push('/MyProfile')}>
          PROFILE
          {/* <ul>
          <li onClick={(event)=> this.props.history.push('/MyProfile')}>
            My Profile
          </li>
          <li onClick={(event)=> this.props.history.push('/MyProfile')}>
            Desired Partner Profile
          </li>
          <li onClick={(event)=> this.props.history.push('/MyProfile')}>
            Alert Manager
          </li>
          <li onClick={(event)=> this.props.history.push('/MyProfile')}>
            Profile Visibility
          </li>
          <li onClick={(event)=> this.props.history.push('/MyProfile')}>
            Hide Profile
          </li>
          <li onClick={(event)=> this.props.history.push('/MyProfile')}>
            Delete Profile
          </li>
          </ul> */}
          </li>
        </ul>
      </div>
      </div>
    );
  }
}
export default MenuBar