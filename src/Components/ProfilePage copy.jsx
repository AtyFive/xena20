import React, { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import {auth} from "../firebase";
import './newstyles.css';

const ProfilePage = () => {
  const user = useContext(UserContext);
  const {photoURL, displayName, email} = user;
  console.log(user);
  
  return (

    

    <div>
        <div
          style={{
            background: `url(${photoURL || 'https://static.wikia.nocookie.net/636d10db-e38a-4c01-b75b-dcba923fbce2'})  no-repeat center center`,
            backgroundSize: "cover",
            height: "200px",
            width: "200px"
          }}
        ></div>
        <div>
          <h2>Your LoginName is:  {displayName}</h2>
          <h3 >Your signup email is:  {email}</h3>
        </div>  
      <button className = 'button_signout' onClick = {() => {auth.signOut()}}> Sign out </button>
    </div>
  ) 
};

export default ProfilePage;

