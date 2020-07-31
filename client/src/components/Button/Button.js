import React,{useState} from 'react'
import './Button.css'

const Button = (props) => {
    return (
        <div className={`btn-${props.class}`}>
           <button className={`btn ${props.class}`} onClick={()=>props.click()}>{props.text}</button>
        </div>
    )
}


export default Button