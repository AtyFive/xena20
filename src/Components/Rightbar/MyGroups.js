import React, {useContext, useEffect, useState, useMemo} from 'react';
import { UserContext } from "../../providers/UserProvider";
import {firestore} from '../../firebase';

const MyGroups = ({testOne, login}) => {
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
      <h3>Group list 2</h3>
      <div>
        {userGroups.map(({id,groupData})=> (
            <p>{groupData.name}</p>

        ))} 
      </div>
    </div>


  )
}

export default MyGroups;