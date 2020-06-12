import React from 'react';
import './UserOutput.css';

let UserOutput = (props)=>{
    return(
        <div className="UserOutputContainer">
            <p>{props.paraContent1}</p>
            <p>{props.paraContent2}</p>
            <p>{props.userName}</p>
        </div>
    );
}

export default UserOutput;