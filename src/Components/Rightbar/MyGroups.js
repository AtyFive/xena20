import React, {useContext, useEffect, useState, useMemo} from 'react';
import { UserContext } from "../../providers/UserProvider";
import {firestore} from '../../firebase';
import '../App.css';
import NewgroupOne from '../groups/NewGroupOne';

const MyGroups = (props) => {
  // const [userName, setUserName] = useState("");
  const { user } = useContext(UserContext);
  const userString = user.uid;
  const groupCollection = firestore.collection("groups")

  const [groups, setGroups] = useState([]);
    
  useEffect(() => {
      groupCollection.onSnapshot(snapshot => {
        setGroups(snapshot.docs.map(doc => ({
          id: doc.id,
          groupData: doc.data(),
          
        })));
      })
  }, []);
  const userGroups = useMemo(
    () => groups.filter(group => group.groupData.users.some(uId => uId === user.uid)),
    [user, groups]
  );
  //IN USEFFECT FIGURE OUT HOW TO TRIGER RERENDER ONLY ON USER GROUPS CHANGE
  
  return(
    <div>
      <div>
        {userGroups.map(({id,groupData})=> (  
          <p 
            className = "group_list"
            onClick = {() => props.alterView(groupCollection.doc(id))}
          >{groupData.name}</p> 
        ))}
      </div>
      <NewgroupOne />
    </div>
   

  )
}

export default MyGroups;

