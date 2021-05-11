import React, {useState, useContext} from 'react'
import ImageGrid from './ImageGrid';
import Modal from './Modal';
import UploadForm from './UploadForm';


function Archive(props) {
    const [selectedImg, setSelectedImg] = useState(null);

    const dingo = props.myTemp;
    const imagesToGet = dingo.collection("imageUrlz");
    // const collectionRef = firestore.collection('users').doc(userString).collection('imageUrlz');

    return (
        <div className = 'app__archive'>
            <UploadForm imagesToGet = {imagesToGet}/>
            <ImageGrid  images = {imagesToGet} setSelectedImg = {setSelectedImg}/>
            { selectedImg &&      <Modal selectedImg = {selectedImg} setSelectedImg = {setSelectedImg}/>}

        </div>
    )
}

export default Archive
