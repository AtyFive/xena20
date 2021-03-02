import React, {useContext, useEffect, useState} from 'react';
import createGroup from '../hooks/createGroup';
import {firestore} from '../../firebase';
import { UserContext } from "../../providers/UserProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const NewEvent = ()=>  {

  const { user } = useContext(UserContext);
  const userString = user.uid;
  
  const [tevent, setTevent] = useState({description: ""})
  const [startDate, setStartDate] = useState(new Date());

  const handleNameChange = (event)=> {
    setTevent({description: event.target.value});
  }
  const handleDateChange = (event)=> {
    setTevent({date: event.target.value});
  }

  const handleSubmit = (event)=> {
    alert('Event created : ' + tevent.description);
    event.preventDefault();
    firestore.collection('users').doc(userString).collection("timeline").doc().set({
      date: startDate,
      description: tevent.description,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label >
        Add new event description:
        <input className = 'event__name' type="text" value={tevent.description} onChange={handleNameChange} />
        Enter new event date:
        <DatePicker className = 'event__date' selected={startDate} onChange={date => setStartDate(date)} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default NewEvent;