import React, { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import {auth} from "../firebase";
import './newstyles.css';
import Logo from '../images/xena_logo.png';
import Post from './Post';
import Navbar from './Navbar';
import Familytree from './Familytree'
import ArchiveMain from '../Components/archive/ArchiveMain'
import DocUploads from '../Components/docUploads/DocUploads'
import Timeline from './Timeline/Timeline'
import Calendar from './Calendar'
import { BrowserRouter, Route } from 'react-router-dom';
import RightBar from './Rightbar/RightBar';
import NewGroupOne from './groups/NewGroupOne';
import './App.css';
import Root from './docUploads/Root';
import TextField from '@material-ui/core/TextField';  

const ProfilePage = () => {
  const { user } = useContext(UserContext);

  const {photoURL, displayName, email} = user;
  //console.log(user);
  
  return (

    <div className="App">

      {/* header */}
      <div className = 'app__header'>
        <img className = 'app_headerImage' src = {Logo} alt = 'XENA'/>
        <div className = 'newGroup_button'>
          {/* <NewGroup /> */}
          <NewGroupOne />
        </div>
        
        
        <div className = "searchBar">
          <TextField id="outlined-basic" label="Search" variant="outlined" />
        </div>
        
        
        <div className = 'signout_block'>
          <div>
            <h2>Your LoginName is:  {displayName}</h2>
            <h3 >Your signup email is:  {email}</h3>
          </div>  
          <button className = 'button_signout' onClick = {() => {auth.signOut()}}> Sign out </button>
        </div>
        
      </div>

      {/* body */}
      <div className = 'app__body'>
        <BrowserRouter>
          <Navbar />
          <Route path = '/home' component = {Post} />
          <Route path = '/archive' component = {ArchiveMain} />
          <Route path = '/uploads' component = {Root} />
          <Route path = '/familyTree' component = {Familytree} />
          <Route path = '/timeLine' component = {Timeline} />
          <Route path = '/calendar' component = {Calendar} />
        </BrowserRouter>    

        {/* rightbar */}
        <div className = 'app__rightbar'>
          <div className = 'app__members'>
            <RightBar />
          </div>
          
        </div>
      </div>

  </div>


  ) 
};

export default ProfilePage;

