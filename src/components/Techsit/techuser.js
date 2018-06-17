import React, {Component} from 'react'

const Techuser = (props) => {
    return(
        <li>
            <span>Name: {props.children}, Age: {props.age}</span>
            <input type="text" onChange={props.changeEvent} value={props.children} />
            <button onClick={props.delEvent}>Delete</button>
        </li>
    )
}

export default Techuser