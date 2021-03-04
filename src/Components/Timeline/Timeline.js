import React, {useContext, useEffect, useState, useMemo} from 'react';
import {firestore} from '../../firebase';
import TimeEvent from './TimeEvent';
import '../App.css';
import { UserContext } from "../../providers/UserProvider";
import NewEvent from './NewEvent';

function Timeline() {

    const { user } = useContext(UserContext);
    const userString = user.uid;
    const userReftime = firestore.collection("users").doc(userString).collection('timeline').orderBy("date", "asc");

    const [events, setEvents] = useState([]);
    const [selectedyear, setSelectedyear] = useState(2021);
    
    //get array of values from firebase reference
    useEffect(() => {
        userReftime.onSnapshot(snapshot => {
            setEvents(snapshot.docs.map(doc => ({
                id: doc.id,
                eventData: doc.data(),
          })));
        })
    }, []);
    
    //get all unique years for initial timeline view
    const myYears = useMemo(
        () => events.map(myEvent => myEvent.eventData.date.toDate().getYear()),
        [events]
    );
    const uniqueYears = [...new Set(myYears)];

    const onTimeClick = (clicked) => {
        // alert(clicked );
        setSelectedyear(clicked);   
    }

    return (
        <div>
            <NewEvent />
            <div className = 'timeline_general'>
                {uniqueYears.map((kkk)=> (
                    <button className = 'timeline_year' onClick = {() => onTimeClick(kkk+1900)}>{kkk+1900}</button>
                    
                ))}
            </div>
            {/* <TimeEvent text = {eventData.description} headingDate = {eventData.date.toDate()}/> */}
            {events.map (({id, eventData})=> (
                
                eventData.date.toDate().getYear() == (selectedyear-1900) ? (
                <TimeEvent text = {eventData.description} headingDate = {eventData.date.toDate()}/>
                ) : <p></p>
            ))}
        </div>
    )
}

export default Timeline
