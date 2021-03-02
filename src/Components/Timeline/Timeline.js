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
        () => events.map(myEvent => myEvent.eventData.date.toDate()),
        [events]
    );

    return (
        <div>
            <NewEvent />
                <div className = 'timeline_general'>
                {myYears.map((kkk)=> (
                    <div className = 'timeline_year'>{kkk.getYear()+1900}</div>
                ))}
                {/* {[...new Set(myYears.getYear())].map((kkk)=> (
                    <p>{kkk + 1900}</p>
                ))} */}
            </div>
            
            {events.map (({id, eventData})=> (
                <TimeEvent text = {eventData.description} headingDate = {eventData.date.toDate()}/>     
            ))}
        </div>
        
    )
}

export default Timeline
