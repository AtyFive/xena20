import React, {useState} from 'react'
import ImageGrid from './ImageGrid';
import Modal from './Modal';
import UploadForm from './UploadForm';


function Archive() {

    const [selectedImg, setSelectedImg] = useState(null);

    return (
        <div className = 'app__archive'>
            <h1>THIS IS ARCHIVE</h1>
            <UploadForm />
            <ImageGrid setSelectedImg = {setSelectedImg}/>
            { selectedImg &&      <Modal selectedImg = {selectedImg} setSelectedImg = {setSelectedImg}/>}
        </div>
    )
}

export default Archive
