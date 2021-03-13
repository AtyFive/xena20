import React, { useContext, useState } from "react";
import { UserContext } from "../providers/UserProvider";
import {auth, firestore} from "../firebase";
import './newstyles.css';

import Post from './Post';
import Navbar from './Navbar';
import Familytree from './Familytree'
import ArchiveMain from '../Components/archive/ArchiveMain'
import Timeline from './Timeline/Timeline'
import Calendar from './Calendar'
import { BrowserRouter, Route } from 'react-router-dom';
import RightBar from './Rightbar/RightBar';
import './App.css';
import Root from './docUploads/Root';
 
import MyGroups from '../Components/Rightbar/MyGroups.js';
import ChatRoom from "./Chat/ChatRoom";
import Header from "./Header";

const ProfilePage = () => {
  const { user } = useContext(UserContext);
  const {photoURL, displayName, email} = user;

  const userString = user.uid;
  const userRef = firestore.collection("users").doc(userString); 

  const [temp, setTemp] = useState(userRef);
  

  return (
    <div className="App">
      {/* header */}
      <div className = "headerHolder">
        <Header />
      </div>

      {/* body */}
      <div className = 'app__body'>
        <div className = "left__bar">
          <BrowserRouter >
            {/* https://ui.dev/react-router-v4-pass-props-to-components/  */}
            <div className = "right__menu">
              <img className = 'app_profileImage' src = {photoURL} alt = 'ANY' onClick = {() => setTemp(userRef)}/>
              <h2 className = "displayName" onClick = {() => setTemp(userRef)}>{displayName}</h2>
              <Navbar />
            </div>
            <div className = 'app_midline'>
              {/* <Route path = '/home' onClick = {() => setTemp(mainRef)} component = {Post} /> */}
              <Route path = '/home' component = {Post} />
              <Route path='/archive' render={(props) => (<ArchiveMain {...props} myTemp = {temp}/>)}/>   
              {/* <Route path = '/uploads' component = {Root} /> */}
              <Route path='/uploads' render={(props) => (<Root {...props} myTemp = {temp}/>)}/>
              <Route path = '/familyTree' component = {Familytree} />
              <Route path = '/timeLine' component = {Timeline} />
              <Route path = '/calendar' component = {Calendar} />
            </div>
            

          </BrowserRouter>   
        </div>
      {/* rightbar */}
        <div className = 'app__rightbar'>
          <div className = 'app__members'>
            <RightBar />
            <MyGroups alterView={groupView => setTemp(groupView)}/>
          </div>
          <ChatRoom />
        </div>
      </div>

  </div>


  ) 
};

export default ProfilePage;

