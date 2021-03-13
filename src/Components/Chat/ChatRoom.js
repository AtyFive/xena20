import React, { useContext, useState, useRef } from "react";
import firebase from "firebase/app";
import {auth, firestore } from "../../firebase";
import { useCollectionData } from 'react-firebase-hooks/firestore'; 
import './chat.css';
import { UserContext } from "../../providers/UserProvider";

const ChatRoom = () => {

  const [formValue, setFormValue] = useState('');
  const [showForm, setshowForm] = useState(false);

  const { user } = useContext(UserContext);
  // const {photoURL, displayName, email} = user;
  const checkUrl = user.photoURL;
  // console.log("Image from context", user.photoURL);


  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);
  //check this hoook - cant find docs rewrite maybe?
  const dummy = useRef();
  const [messages] = useCollectionData(query, { idField: 'id' });
  
  //message
  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    console.log("My picture is", photoURL)

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      // incuding below line cause auth.currentUser gets photoUrl field only from signups with google or facebook
      // if its standard sign up imageUrl is different 
      photoURL: photoURL || checkUrl, 
    })

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  
  
  const chatWindow = () => {
    return (
      <div className="chat-popup"> 
        <form className = "form-container">
          <h1>Chat</h1>

          {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
          <span ref={dummy}></span>
          <form className = "message_input"  onSubmit={sendMessage}>
            <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Type your message" />
            <button type="submit" disabled={!formValue}>Send</button>
          </form>

          {/* <textarea placeholder="Type message.."></textarea>
          <button type="submit" className="btn">Send</button> */}
          <button className="btn cancel" onClick = {() => setshowForm(false)}>Close Chat</button>
        </form>
        
      </div>
    );
  }


  function ChatMessage(props) {
    const { text, uid, photoURL } = props.message;
    //to make message style different if sent or received
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
    return (<>
      <div className={`message ${messageClass}`}>
        <img className= "chat_ava" src={photoURL || 'https://i.pinimg.com/originals/0f/09/0b/0f090b78c3c3d0a7381b41b6dd3976c6.jpg'} />
        <p>{text}</p>
      </div>
    </>)
  }

  return(
    <div>
      {showForm ? chatWindow() : <button className="open-button" onClick = {() => setshowForm(true)}>Chat</button>}
    </div>

  )
}

export default ChatRoom;

