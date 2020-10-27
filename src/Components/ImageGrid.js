import React from 'react';
import useFirestore from '../hooks/useFirestore';
import {motion} from 'framer-motion';
import './index.css'

const  ImageGrid = ({setSelectedImg})=> {

    // const user = useContext(UserContext);
    // const {photoURL, displayName, email} = user;
    // console.log(user);

    const {docs} = useFirestore('images');
    //console.log(docs);  

    return (
        <div className = 'img-grid'>
            { docs && docs.map(doc => (
                <motion.div className = 'img-wrap' key = {doc.id}
                    layout
                    whileHover = { {opacity:1} }
                    onClick = {() => setSelectedImg(doc.url)}
                >
                    <motion.img src = {doc.url} alt = '' 
                        initial = {{ opacity: 0  }}
                        animate = {{ opacity: 1  }}
                        transition = {{ delay: 1 }}
                    />
                </motion.div>
            ))}
        </div>
    )
}

export default ImageGrid
