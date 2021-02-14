import React, {useContext, useEffect, useState} from 'react'
import DocUploads from './DocUploads';
import { UserContext } from "../../providers/UserProvider";
import {firestore, auth} from '../../firebase';
import PlusButton from './PlusButton';
import Counter from './Counter';


function Root() {
    const { user } = useContext(UserContext);
    const userString = user.uid;
    const userRef = firestore.collection("users").doc(userString);
    const imageRefs = userRef.collection("myUploads");

    const [ref, setRef] = useState("");
    const myImage = imageRefs.doc('AB8V7x7G6K0341yTLgoA');
    const theVera = myImage.get().then((doc) => {
        if (doc.exists) {
            // console.log("Document ddata:", doc.data());
            setRef(doc.data());
            // console.log("Document ddata:", ref)
        } 
    });
    
    const [count, setCount] = useState('null');
    
    return (
        <div>
            
            {/* <DocUploads  collRef = {imageRefs}/> */}
           
            <Counter login={username => setCount(username)}/>
            <p>Hellos + {count}</p>
            <img src = {ref.url} alt = "XENA"/> 

        </div>

    )   
}

export default Root;

