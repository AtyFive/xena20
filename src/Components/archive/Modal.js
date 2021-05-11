import React from 'react';
import {motion} from 'framer-motion';
import './archive.css'

//this uses state from the parent and setselected image updates state in parent
const Modal = ({selectedImg, setSelectedImg})=> {

    const handleClick = (e)=> {
        // we look where event happened so that click works only if we do it outside picture
        //setting state to null means the enlarged image wont be shown - it wont go to modal from parent
        if(e.target.classList.contains('backdrop')){
            setSelectedImg(null);
        }
    }

    return (
    <motion.div className = 'backdrop' onClick = {handleClick}
        initial = {{opacity:0}}
        animate = {{opacity:1}}
    >
        <motion.img className = 'image__inside' src = {selectedImg} alt = '' 
            // -100 vh takes the image of the viewport completely so it can slide down to y=0
            initial = {{ y: '-100vh' }}
            animate = {{ y: 0 }}
        />
    </motion.div>
    )
}

export default Modal;