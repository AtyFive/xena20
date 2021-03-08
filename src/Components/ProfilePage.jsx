import React, { useContext, useState } from "react";
import { UserContext } from "../providers/UserProvider";
import {auth, firestore} from "../firebase";
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
import MyGroups from '../Components/Rightbar/MyGroups.js';

const ProfilePage = () => {
  const { user } = useContext(UserContext);
  const {photoURL, displayName, email} = user;
  
  //doing state to pass here collection (from user/group) reference
  const userString = user.uid;
  const userRef = firestore.collection("users").doc(userString); 
  // const userRef = firestore.collection("groups").doc("IQo3lpy5yHi93EAvxU45"); 
  const [temp, setTemp] = useState(userRef);
  

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
          {/* <Route path = '/archive' component = {ArchiveMain} /> */}
          <Route path='/archive' render={(props) => (<ArchiveMain {...props} myTemp = {temp}/>)}/>
          {/* https://ui.dev/react-router-v4-pass-props-to-components/ */}
          <Route path = '/uploads' component = {Root} />
          <Route path = '/familyTree' component = {Familytree} />
          <Route path = '/timeLine' component = {Timeline} />
          <Route path = '/calendar' component = {Calendar} />
        </BrowserRouter>    

        {/* rightbar */}
        <div className = 'app__rightbar'>
          <div className = 'app__members'>
            <RightBar />
            <MyGroups alterView={groupView => setTemp(groupView)}/>
          </div>
          
        </div>
      </div>

  </div>


  ) 
};

export default ProfilePage;

