import React from 'react';
// import './App.css';
const validation = (props) => {
    let validationMessage = "text too short";
    if (props.length > 5){
        validationMessage = "text long enough";
    }
    return (
        <div className="Validation">
        <p>{validationMessage}</p>
        </div>
    )
}
export default validation;
