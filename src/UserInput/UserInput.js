import React from 'react';

let UserInput = (props)=>{
    return(
        <div className="UserInputContainer">
            <input className="userInput" onChange={props.change}></input>
        </div>
    );
}

export default UserInput;