import React, {useEffect} from 'react'
import useStorage from '../hooks/useStorage';
import {motion} from 'framer-motion';


const ProgressBar = ({ file, setFile }) => {
    const {url, progress} = useStorage({file:file, collectionName: 'myUploads'});
    console.log (progress, url);

    //this to remove progress Bar once its loaded, basically we get url in the end of upload so that if test
    useEffect(()=> {
        if (url){
            setFile(null);
        }
    }, [url, setFile])

    return (
        <motion.div className = 'progress-bar'
            initial = {{width: 0}}
            animate = {{ width: progress + '%' }}
        >Upload progress</motion.div>
        // <div className = 'progress-bar' style = {{width: progress + '%'}} >Upload progress</div> 
    )

}

export default ProgressBar
