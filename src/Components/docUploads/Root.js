import React, {useContext, useEffect, useState} from 'react'
import DocUploads from './DocUploads';
import { UserContext } from "../../providers/UserProvider";
import {firestore, auth} from '../../firebase';

function Root() {
    const { user } = useContext(UserContext);
    const userString = user.uid;
    const userRef = firestore.collection("users").doc(userString);
    const imageRefs = userRef.collection("myUploads");
    const newImageRefs = userRef.collection("imageUrlz");
    const [refTo, setrefTo] = useState(imageRefs);


    // const [ref, setRef] = useState("");
    // const myImage = imageRefs.doc('AB8V7x7G6K0341yTLgoA');
    // const theVera = myImage.get().then((doc) => {
    //     if (doc.exists) {
    //         // console.log("Document ddata:", doc.data());
    //         setRef(doc.data());
    //         // console.log("Document ddata:", ref)
    //     } 
    // });
    
    // const [count, setCount] = useState('null');
    // const [names, setNames] = useState(["Taras", "Taras1", "taras2", "Natalie"]);
    
    return (
        <div>
            <DocUploads  
                // collRef = {imageRefs} 
                collRef = {refTo}
                newCollRef = {newImageRefs} 
                alterTime={egoOne => setrefTo(egoOne)}
            />
           
            {/* {names.map ((name) => (
                <button type="button" onClick = {() => alert(name)} >{name}</button>
            ))}

            <Counter testOne = 'Jackson' login={myFunc => setCount(myFunc)}/>
            <p>Hellos + {count}</p> */}
            {/* <img src = {ref.url} alt = "XENA"/>  */}

        </div>

    )   
}

export default Root;

