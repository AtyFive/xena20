import React, { useState, useContext } from 'react'
import ProgressBar from './ProgressBar'
import '../App.css';
import './archive.css'
import { UserContext } from "../../providers/UserProvider";
import {projectStorage, firestore, timestamp} from '../../firebase';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: 'none',
    },
  }));



const UploadForm = ({imagesToGet}) => {
    const classes = useStyles();
    
    //to store selected file we use state
    const [file, setFile] = useState(null)
    const [error, setError] = useState(null)
    //creating array of allowed formats
    const types = ['image/png', 'image/jpeg']

    const [myfiles, setMyfiles] = useState(null) 

    const changeHandlerTwo = (e) => {
        let selectedFiles = e.target.files
        // let selected = e.target.files[1]
        console.log("Mamma", selectedFiles)
        setMyfiles(selectedFiles);
    }


    const changeHandler = (e) => {
        let selected = e.target.files[0]
        
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
        <div>
            <div className={classes.root}>
                <input
                    accept="image/*"
                    className={classes.input}
                    id="contained-button-file"
                    multiple
                    type="file"
                    onChange = {changeHandlerTwo}
                />
                <label htmlFor="contained-button-file">
                    <Button variant="contained" color="primary" component="span">
                    Upload
                    </Button>
                </label>
                {myfiles && <ProgressBar collectionRef = {imagesToGet} files={myfiles} setFiles = {setMyfiles}/>}
            </div>


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
        </div>

    )
}

export default UploadForm
