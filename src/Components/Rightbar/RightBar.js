import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import MyGroups from './MyGroups.js'
import Xena_a from '../../images/xena_a.jpg';
import '../App.css';
 
export default function RightBar() {
    return (
      <div>
        <h3>Family members: </h3>
        <div className = 'familyAvatar'>
          <Avatar alt="Remy Sharp" src={Xena_a} />
          <Avatar alt="Remy Sharp">TG</Avatar>
          <Avatar alt="Travis Howard" src={require('../../images/bush.jpg')} />
          <Avatar alt="Cindy Baker" src={require('../../images/megan.jpg')} />
          <Avatar alt="Cindy Baker" src={require('../../images/queen.jpg')} />
        </div>

        <h3>My Groups and Projects: </h3>
        {/* <MyGroups /> */}
        
        
      </div>

    );
}
