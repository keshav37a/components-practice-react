import React, {useState} from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

function App() {

  let inlineStyles = {
    padding: '0.25rem',
    backgroundColor: 'lightBlue',
    margin: '1rem'
  };

  const [userState, setUserState] = useState({
    userInfo: [
      {
        paraContent1: "para blah 1",
        paraContent2: "para blah 2",
        userName: "Keshav"
      },
      {
        paraContent1: "para blah 11",
        paraContent2: "para blah 22",
        userName: "K1"
      },
      {
        paraContent1: "para blah 111",
        paraContent2: "para blah 222",
        userName: "K2"
      }
    ]
  })

  let userNameChangeHandler = ()=>{
    setUserState({userInfo:[
      {
        paraContent1: "para blah 1",
        paraContent2: "para blah 2",
        userName: 'CHANGED'
      },
      {
        paraContent1: "para blah 11",
        paraContent2: "para blah 22",
        userName: "K1"
      },
      {
        paraContent1: "para blah 111",
        paraContent2: "para blah 222",
        userName: "K2"
      }
    ]});
  }

  let onInputChangeHandler = (event)=>{
    console.log(event.target.value);
    setUserState({userInfo:[
      {
        paraContent1: "para blah 1",
        paraContent2: "para blah 2",
        userName: `${event.target.value}`
      },
      {
        paraContent1: "para blah 11",
        paraContent2: "para blah 22",
        userName: "K1"
      },
      {
        paraContent1: "para blah 111",
        paraContent2: "para blah 222",
        userName: "K2"
      }
    ]});
  }

  return (
    <div className="App">
      <h1>Working</h1>
      <button style={inlineStyles} onClick={userNameChangeHandler}>Click Me</button>
      <UserInput change={onInputChangeHandler}/>
      {userState.userInfo.map((user, index)=>{
        return(
        <UserOutput 
          paraContent1={user.paraContent1}
          paraContent2={user.paraContent2}
          userName={user.userName}
          key={index}
        />)
      })}
    </div>
  );
}

export default App;
