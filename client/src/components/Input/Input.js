import React,{useState} from 'react';
import './Input.css';
import Button from '../Button/Button'

const Input = (props) => {
    
    return (
        <div className='input-main'>
            <div className='input-container'>
                <label className='label-text'>Search by title</label>
                <input value={props.value} className='input' placeholder='Search' onChange={(e)=> props.change(e.target.value)}/>
            </div>
            <div className='btn-group'>
               <Button class='search' text='Search' click={props.clickF}/>
                <Button class='clear' text='Clear' click={props.clickD}/> 
            </div>
            
        </div>
    )
}


export default Input