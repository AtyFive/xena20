import React, {useState, useContext} from 'react'
import ImageGrid from './ImageGrid';
import Modal from './Modal';
import UploadForm from './UploadForm';
import { UserContext } from "../providers/UserProvider";


function Archive() {

    const [selectedImg, setSelectedImg] = useState(null);

    const user = useContext(UserContext);
    const {photoURL, displayName, email, imageUrls} = user;

    return (
        <div className = 'app__archive'>
            <h1>THIS IS ARCHIVE</h1>
            <UploadForm />
            <ImageGrid setSelectedImg = {setSelectedImg}/>
            { selectedImg &&      <Modal selectedImg = {selectedImg} setSelectedImg = {setSelectedImg}/>}
            <p>Another try</p>
            <p>{imageUrls[0]}</p>
        </div>
    )
}

export default Archive
