import React, { useContext, useState } from "react";
import { UserContext } from "../providers/UserProvider";
import TextField from '@material-ui/core/TextField'; 
import {auth, firestore} from "../firebase";
import Logo from '../images/xena_logo.png';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';
import Xena_a from '../images/xena_a.jpg';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { Link, Link as RouterLink } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';

const Header = () => {
  const { user } = useContext(UserContext);
  const {photoURL, displayName, email} = user;

  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return(
    <div className = 'app__header'>
          <img className = 'app_headerImage' src = {Logo} alt = 'XENA'/>
          <div className= "searchBar">
            <TextField  id="outlined-basic" label="Search" variant="outlined" />
          </div>
          <div className = 'signout_block'>
            <div>
              {/* <h2>Your LoginName is:  {displayName}</h2>
              <h3 >Your signup email is:  {email}</h3> */}
              {/* <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                Open Menu
              </Button> */}
              <div className = 'signoutAvatar'>
                <div className ='mail' >
                  
                    <Link to="/mail"> 
                      <MailOutlineIcon style={{ fontSize: 50 }} />
                    </Link>
                  

                </div>
                <Avatar onClick={handleClick} alt="Remy Sharp" src={Xena_a} />
              </div>
              

              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick = {() => {auth.signOut()}}>Logout</MenuItem>
              </Menu>
            </div>  
            {/* <button className = 'button_signout' onClick = {() => {auth.signOut()}}> Sign out </button> */}
        </div>
    </div>

  )
}

export default Header;

