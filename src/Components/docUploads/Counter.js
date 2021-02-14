import React from 'react';

const Counter = ({login}) => {
  // const [userName, setUserName] = useState("");
  let username = 'Ms Kitty';

  return(
    <button type="button" onClick = {() => login(username)}>
        SUBMITTTI
    </button>
  )
}

export default Counter;

