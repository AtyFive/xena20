import React from "react";
import { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import "./Mail.css";
import BorderColorRoundedIcon from '@material-ui/icons/BorderColorRounded';

export default function NewMail() {
  return (
    
    <div className = "mail__container">
      <div className = "mail__newMail">
        <BorderColorRoundedIcon color="action" />
      </div>
      <AnimateSharedLayout>
        <motion.ul layout initial={{ borderRadius: 25 }}>
          {items.map(item => (
            <Item key={item} />
          ))}
        </motion.ul>
        <motion.div 
          className = "mail__loadMore"
          layout
          transition={{ duration: 0.5 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
         >Load more</motion.div>

        {/* <div>
          {mails.map(({id, mailData}) => (
                    
                    <p>{mailData.text}</p>  
                )) }  
        </div> */}
      </AnimateSharedLayout>
      
    </div>


  );
}

function Item() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleOpen = () => setIsOpen(!isOpen);
  
    return (
      <motion.li layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
        
        <motion.div className = "mail__item" layout>
          <motion.div className="mail__author" layout> Marc Lewis </motion.div>
          <motion.div className="mail__heading" layout> What is love really? </motion.div>
          <motion.div className="mail__date" layout> Mar-21 </motion.div>
        </motion.div>
        <AnimatePresence>{isOpen && <Content />}</AnimatePresence>
      </motion.li>
    );
  }
  
  function Content() {
    return (
      <motion.div
        layout
        transition={{ duration: 0.5 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="row" />
        <div className = 'mail__messageText'>The text of the message will go here.
        The text of the message will go here. The text of the message will go here. The text of the message will go here.
        The text of the message will go here. The text of the message will go here. The text of the message will go here.
        </div>
      </motion.div>
    );
  }
  
  const items = [0, 1, 2];