import React, { useState, useContext } from 'react'
import ProgressBar from './ProgressBar'
import '../App.css';
import './archive.css'
import { UserContext } from "../../providers/UserProvider";
import {projectStorage, firestore, timestamp} from '../../firebase';


const UploadForm = ({imagesToGet}) => {
    //to store selected file we use state
    const [file, setFile] = useState(null)
    const [error, setError] = useState(null)
    //creating array of allowed formats
    const types = ['image/png', 'image/jpeg']

    // const { user } = useContext(UserContext);
    // const userString = user.uid;
    // const collectionRef = firestore.collection('users').doc(userString).collection('imageUrlz');

    // console.log('Romadina', imagesToGet)

    const changeHandler = (e) => {
        let selected = e.target.files[0]
        console.log("Mamma", selected)
        //next one is used cause we can open and cancel thn no file but state changed
        if(selected && types.includes(selected.type)) {
            setFile(selected)  
            setError('')
        } else {
            setFile(null);
            setError('Please select a valid file type (png or jpeg)')
        }
    }

    return (
        <form>
            <label>
                <input className = 'upload_buttonMac' type = "file" onChange = {changeHandler}/>
                
            </label>
            
            <div className = 'output'>
                {/* we kind of display this or that based on what condition is met - error or filename */}
                {/* the right side after && is output only if left side is true */}
                { error && <div className = 'error'> {error} </div> }
                {file && <div>{file.name}</div>}
                {file && <ProgressBar collectionRefTwo = {imagesToGet} file={file} setFile = {setFile}/>}
            </div>
        </form>
    )
}

export default UploadForm
