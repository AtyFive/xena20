import React from 'react';

const TimeEvent = ({headingDate, text}) => {
  
  
  return(
    <div className = 'timeEvent_main'>
      <h2 className= 'timeEvent_heading'>{headingDate.toString()}</h2>
      <img className = 'timeEvent_image' src = "https://cdn.cnn.com/cnnnext/dam/assets/160204101907-nba-slam-dunk-5-story-body.jpg"></img>
      <p>{text}</p>
    </div>
  )
}

export default TimeEvent;

