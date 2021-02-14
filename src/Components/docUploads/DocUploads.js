import React, {useContext, useEffect, useState} from 'react'
import UploadForm from '../docUploads/UploadForm';
import { UserContext } from "../../providers/UserProvider";
import {firestore, auth} from '../../firebase';


function DocUploads({collRef}) {
    const [images, setImages] = useState([]);
    
    // const { user } = useContext(UserContext);
    // const userString = user.uid;
    // const userRef = firestore.collection("users").doc(userString);
    // const imageRefs = userRef.collection("myUploads");
    
    useEffect(() => {
        collRef.onSnapshot(snapshot => {
            setImages(snapshot.docs.map(doc => ({
                id: doc.id,
                imageUrl: doc.data()
            })));
        })
    }, [images]); 

    return (
        <div>
            <div className = 'archiveImage'>       
                {images.map(({id, imageUrl}) => (
                    //adding key allows to rerender only the post we need, not all of them
                    <img key = {id} src = {imageUrl.url} alt = "XENA"/>  
                )) }  
            </div>
            <UploadForm />
        </div>

    )   
}

export default DocUploads;

