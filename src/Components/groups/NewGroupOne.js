import React, {useContext, useEffect, useState} from 'react';
import createGroup from '../hooks/createGroup';
import {projectStorage, firestore} from '../../firebase';
import { UserContext } from "../../providers/UserProvider";
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const NewgroupOne = ()=>  {

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(160),
        height: theme.spacing(40),
      },
    },
  }));
  const [showGroupForm, setShowGroupForm] = useState(false);

  const bringGroupForm = () => {
    setShowGroupForm(!showGroupForm);
  }
  
  const { user } = useContext(UserContext);
  const [group, setGroup] = useState({groupName: ""})

  const handleChange = (event)=> {
    setGroup({groupName: event.target.value});
  }

  const handleSubmit = (event)=> {
    alert('New Group was created: ' + group.groupName);
    event.preventDefault();
    firestore.collection('groups').doc().set({
      name: group.groupName,
      users: [user.uid],
    });
    setShowGroupForm(false);
  }
  const classes = useStyles();


  return (
    <div>
      <Button variant="contained" onClick={bringGroupForm}>
        Create New Group
      </Button>

      {showGroupForm && (
        <div className = "formtofill">
          <div className={classes.root}>
            <Paper elevation={3}>
              <form className = 'newGroup_form' onSubmit={handleSubmit}>
                <p>Enter New Group Name:</p>
                <input className = 'newGroupInputField' type="text" value={group.groupName} onChange={handleChange} />
                <input className = 'newGroupSumbit' type="submit" value="Submit" />
              </form>
              <div className = 'newGroup_button'>
                <Button variant="contained" onClick={bringGroupForm}>
                  Close Form
                </Button>
              </div>


            </Paper> 
          </div>
        </div>
      )}



    </div>

  );
}

export default NewgroupOne;