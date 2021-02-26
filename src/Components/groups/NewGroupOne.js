import React, {useContext, useEffect, useState} from 'react';
import createGroup from '../hooks/createGroup';
import {projectStorage, firestore} from '../../firebase';
import { UserContext } from "../../providers/UserProvider";

const NewgroupOne = ()=>  {

  const { user } = useContext(UserContext);
  const [group, setGroup] = useState({groupName: ""})

  const handleChange = (event)=> {
    setGroup({groupName: event.target.value});
  }

  const handleSubmit = (event)=> {
    alert('A name was submitted: ' + group.groupName);
    event.preventDefault();
    firestore.collection('groups').doc().set({
      name: group.groupName,
      users: [user.uid],
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label >
        Enter Group Name:
        <input className = 'newGroup' type="text" value={group.groupName} onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default NewgroupOne;