import React, {useContext, useEffect, useState} from 'react';
import { UserContext } from "../../providers/UserProvider";
import {firestore} from '../../firebase';

const MyGroups = ({testOne, login}) => {
  // const [userName, setUserName] = useState("");
  const { user } = useContext(UserContext);
  //user document - user.id
  const groupCollection = firestore.collection("groups")

  const [groups, setGroups] = useState([]);
    
  useEffect(() => {
      groupCollection.onSnapshot(snapshot => {
          setImages(snapshot.docs.map(doc => ({
              id: doc.id,
              imageUrl: doc.data()
          })));
      })
  }, [images]); 
  //IN USEFFECT FIGURE OUT HOW TO TRIGER RERENDER ONLY ON USER GROUPS CHANGE

  return(
    <h3>Group list</h3>
  )
}

export default MyGroups;