import React from 'react';

const Counter = ({testOne, login}) => {
  // const [userName, setUserName] = useState("");
  let username = 'Ms Kitty';

  return(
    <button type="button" onClick = {() => login(testOne)}>
        SUBMITTTI
    </button>
  )
}

export default Counter;

