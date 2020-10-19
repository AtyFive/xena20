import React, { useState } from 'react'
import ProgressBar from './ProgressBar'

const UploadForm = () => {
    //to store selected file we use state
    const [file, setFile] = useState(null)
    const [error, setError] = useState(null)
    //creating array of allowed formats
    const types = ['image/png', 'image/jpeg']

    const changeHandler = (e) => {
        //so we want to select file that user selected and it can be done 
        //by means of choosing e event and accessing 'target' also [0] cause we only selecting one first file 
        let selected = e.target.files[0]
        
        //next one is used cause we can open and cancel thn no file but state changed
        if(selected && types.includes(selected.type)) {
            setFile(selected)  //seting state to the file we picked
            setError('')
        } else {
            setFile(null);
            setError('Please select a valid file type (png or jpeg)')
        }
    }

    return (
        <form>
            <label>
                <input type = "file" onChange = {changeHandler}/>
                <span>+</span>
            </label>
            
            <div className = 'output'>
                {/* we kind of display this or that based on what condition is met - error or filename */}
                {/* the right side after && is output only if left side is true */}
                { error && <div className = 'error'> {error} </div> }
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile = {setFile}/>}
            </div>
        </form>
    )
}

export default UploadForm
