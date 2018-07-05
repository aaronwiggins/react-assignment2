import React from 'react';

const characters = (props) => {
    const charStyles = {
        display: 'inline-block', 
        padding: '16px', 
        textAlign: 'center', 
        margin: '16px', 
        border: '1px solid black',
    }
    return(
        <div onClick={props.clicked} style={charStyles} className="characters">
        {props.character}
        </div>
    )
}
export default characters;