import {useContext, useEffect, useState} from 'react'
import {projectStorage, firestore, timestamp} from '../../firebase';
import { UserContext } from "../../providers/UserProvider";

const createGroup = ({groupName, users}) => {

    // const [url, setUrl] = useState(null);

    const collectionRef = firestore.collection('groups').document().set({
        name: groupName,
        users: [],
    });



} 

export default createGroup