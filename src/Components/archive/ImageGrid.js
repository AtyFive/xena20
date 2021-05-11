import React, { useContext, useState } from "react";
import { UserContext } from "../../providers/UserProvider";
import useFirestore from '../hooks/useFirestore';
import {motion} from 'framer-motion';
import './archive.css'
import {auth, firestore} from "../../firebase";


const  ImageGrid = ({imagesToGet, setSelectedImg})=> {

    const { user } = useContext(UserContext);
    const userString = user.uid;
    const imageCollection = firestore.collection("users").doc(userString).collection("imageUrlz"); 
    const {docs} = useFirestore(imageCollection);

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
