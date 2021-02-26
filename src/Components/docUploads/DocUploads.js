import React, {useContext, useEffect, useState} from 'react'
import UploadForm from '../docUploads/UploadForm';

function DocUploads({collRef, newCollRef, alterTime}) {
    const [images, setImages] = useState([]);
    
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
                    <div>
                        <img key = {id} src = {imageUrl.url} alt = "XENA" onClick = {() => alterTime(newCollRef)}/>  
                    </div>
                )) }  
            </div>
            <UploadForm />
        </div>

    )   
}

export default DocUploads;

