import React, {useEffect, useContext} from 'react'
import useStorage from '../hooks/useStorage';
import {motion} from 'framer-motion';
import CircularIndeterminate from './CircularIndeterminate';
import { PersonalVideo } from 'material-ui-icons';


const ProgressBar = ({collectionRefTwo, file, setFile }) => {

    const {url, progress} = useStorage({file:file, collectionName: collectionRefTwo});
    // console.log (progress, url);
    
    // myfiles.array.forEach(file, collectionName => {
    //     useStorage({file:file, collectionName: collectionRefTwo});
    //     push url from useStorage 
    //     compare length myfiles and url then setmyfiles to null
    // });

    //this to remove progress Bar once its loaded, basically we get url in the end of upload so that if test
    useEffect(()=> {
        if (url){
            setFile(null);
        }
    }, [url, setFile])

    return (
        <div>
            {/* <motion.div className = 'progress-bar'
                initial = {{width: 0}}
                animate = {{ width: progress + '%' }}
            >Upload progress</motion.div> */}
            <CircularIndeterminate />
        </div>
        
        // <div className = 'progress-bar' style = {{width: progress + '%'}} >Upload progress</div> 
    )

}

export default ProgressBar
