import React, {useContext, useEffect, useState} from 'react'
import DocUploads from './DocUploads';
import { UserContext } from "../../providers/UserProvider";
import {firestore, auth} from '../../firebase';

function Root(props) {
    const dingo = props.myTemp;
    const imageRefs = dingo.collection("myUploads");
    const [refTo, setrefTo] = useState(imageRefs);

    //to rerender ref when it is changed from parent to groupview
    useEffect(() => {
        const imageRefsChanged = dingo.collection("myUploads");
        setrefTo(imageRefsChanged);
      }, [dingo]);

    //this is for future folder structure
    const newImageRefs = firestore.collection("users").doc("mriJxfWotgevFKhb2259tGnedTW2").collection("imageUrlz");
    
    return (
        <div>
            <DocUploads  
                // key = {imageRefs} 
                collRef = {refTo}
                newCollRef = {newImageRefs} 
                alterTime={egoOne => setrefTo(egoOne)}
            />
        </div>

    )   
}

export default Root;

